from django.db import models

# Create your models here.
class Zone(models.Model):
    name = models.CharField(max_length=100)
    level = models.ForeignKey('levels.Level', on_delete=models.CASCADE)
    zones = models.ManyToManyField('self', blank=True, symmetrical=True)
    game = models.ForeignKey('games.Game', blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'name: {self.name}, level: {self.level}'