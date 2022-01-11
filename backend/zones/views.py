from django.shortcuts import render

from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Zone
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status ## status code
from rest_framework.permissions import IsAuthenticatedOrReadOnly 
from .serializers import PopulatedZoneSerializer, ZoneSerializer

# Create your views here.
class ZoneDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def delete(self, request, pk):
        try:
            zone = Zone.objects.get(id=pk)
            zone.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk):
        zone = Zone.objects.get(id=pk)
        updated_zone = ZoneSerializer(zone, data=request.data)
        if updated_zone.is_valid():
            updated_zone.save()
        else:
            return Response(updated_zone.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        return Response(updated_zone.data, status=status.HTTP_202_ACCEPTED)
    
    def get(self, _request, pk):
        zone = Zone.objects.get(id=pk)
        serialized_zone = PopulatedZoneSerializer(zone)
        return Response(serialized_zone.data, status=status.HTTP_200_OK)

class ZoneListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def get(self, request):
        zones = Zone.objects.all()
        serialized_zones = PopulatedZoneSerializer(zones, many=True)
        return Response(serialized_zones.data, status=status.HTTP_200_OK)

    def post(self, request):
        zone = ZoneSerializer(data=request.data)
        if zone.is_valid():
            zone.save()
        else:
            return Response(zone.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        return Response(zone.data, status=status.HTTP_201_CREATED)