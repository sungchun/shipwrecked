from rest_framework import serializers
# from games.serializers import GameSerializer
from .models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

# class PopulatedItemSerializer(ItemSerializer):
#     game_set = GameSerializer(read_only=True, many=True)