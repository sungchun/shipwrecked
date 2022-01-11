from django.db import models
from rest_framework import serializers

from items.serializers import ItemSerializer
from levels.serializers import LevelSerializer
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

class PopulatedGameSerializer(GameSerializer):
    item_set = ItemSerializer(read_only=True, many=True)
    level_set = LevelSerializer(read_only=True, many=True)