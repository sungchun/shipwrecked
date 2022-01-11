from django.db import models

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=100)
    game = models.ForeignKey("games.Game", on_delete=models.CASCADE)

    def __str__(self):
        return f'name: {self.name}, save: {self.game}'