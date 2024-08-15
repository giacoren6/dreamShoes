from django.db import models

class Shoe(models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    size = models.DecimalField(max_digits=4, decimal_places=1)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.TextField()
    image_url = models.URLField()

    def __str__(self):
        return f'{self.name} by {self.brand} - {self.size}'

