# Generated by Django 3.2.9 on 2021-12-06 10:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('levels', '0001_initial'),
        ('games', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Zone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('level', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='levels.level')),
                ('save', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='games.game')),
                ('zones', models.ManyToManyField(related_name='_zones_zone_zones_+', to='zones.Zone')),
            ],
        ),
    ]
