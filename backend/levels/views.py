from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly 
from .serializers import LevelSerializer
from .models import Level

# Create your views here.
class LevelListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def get(self, _request):
        levels = Level.objects.all()
        serialized_levels = LevelSerializer(levels, many = True)
        return Response(serialized_levels.data, status=status.HTTP_200_OK)

    def post(self, request):
        level = LevelSerializer(data = request.data)
        if level.is_valid():
            level.save()
            return Response(level.data, status=status.HTTP_201_CREATED)
        else:
            return Response(level.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LevelDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    def delete(self, request, pk):
        try:
            level = Level.objects.get(id=pk)
            level.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def put(self, request, pk):
        level = Level.objects.get(id=pk)
        updated_level = LevelSerializer(level, data=request.data)
        if updated_level.is_valid():
            updated_level.save()
            return Response(updated_level.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_level.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    def get(self, request, pk):
        level = Level.objects.get(id=pk)
        serialized_level = LevelSerializer(level)
        return Response(serialized_level.data, status=status.HTTP_200_OK)
