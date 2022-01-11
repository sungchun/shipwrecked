from django.db import models
from rest_framework import serializers
from .models import Zone

class ZoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zone
        fields = '__all__'

class PopulatedZoneSerializer(ZoneSerializer):
    zone_set = ZoneSerializer(read_only=True, many=True)