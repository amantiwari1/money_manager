from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Income(models.Model):
    amount = models.IntegerField()
    date = models.DateField()
    spentOn = models.CharField(max_length=255)
