# Generated by Django 3.2.9 on 2021-12-06 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zones', '0002_rename_save_zone_game'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zone',
            name='zones',
            field=models.ManyToManyField(blank=True, related_name='_zones_zone_zones_+', to='zones.Zone'),
        ),
    ]
