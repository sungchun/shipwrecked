from django.db import models

# Create your models here.
class Level(models.Model):
    name = models.CharField(max_length=200)
    game = models.ForeignKey('games.Game', on_delete=models.CASCADE)

    def __str__(self):
        return f'Level: {self.name}, for save: {self.game}'
