from django.shortcuts import render

from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Item
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status ## status code
from rest_framework.permissions import IsAuthenticatedOrReadOnly 
from .serializers import  ItemSerializer
# PopulatedItemSerializer,
# Create your views here.

class ItemDetailView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    def delete(self, request, pk):
        try:
            item = Item.objects.get(id=pk)
            item.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        item = Item.objects.get(id=pk)
        updated_item = ItemSerializer(item, data=request.data)
        if updated_item.is_valid():
            updated_item.save()
            return Response(updated_item.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_item.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request, pk):
        item = Item.objects.get(id=pk)
        serialized_item = ItemSerializer(item)
        return Response(serialized_item.data, status=status.HTTP_200_OK)


class ItemListView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    def post(self, request):
        item = ItemSerializer(data=request.data)
        if item.is_valid():
            item.save()
            return Response(item.data, status=status.HTTP_201_CREATED)
        else:
            return Response(item.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
            
    def get(self, request):
        items = Item.objects.all()
        serialized_items = ItemSerializer(items, many=True)
        return Response(serialized_items.data, status=status.HTTP_200_OK)
