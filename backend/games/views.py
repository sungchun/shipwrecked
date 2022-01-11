from django.shortcuts import render

from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Game
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.permissions import IsAuthenticatedOrReadOnly 
from .serializers import GameSerializer, PopulatedGameSerializer

class GameDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def delete(self, request, pk):
        try:
            game = Game.objects.get(id=pk)
            game.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        game = Game.objects.get(id=pk)
        updated_game = GameSerializer(game, data=request.data)
        if updated_game.is_valid():
            updated_game.save()
            return Response(updated_game.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_game.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
 
    def get(self, request, pk):
        game = Game.objects.get(id=pk)
        serialized_game = GameSerializer(game)
        return Response(serialized_game.data, status=status.HTTP_200_OK)


class GameListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self,request):
        game = GameSerializer(data = request.data)
        if game.is_valid():
            game.save() 
            return Response(game.data, status=status.HTTP_201_CREATED)
        else:
            return Response(game.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request):
        games = Game.objects.all()
        serialized_games = GameSerializer(games, many=True)
        return Response(serialized_games.data, status=status.HTTP_200_OK)
