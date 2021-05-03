from djongo import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Income(models.Model):
    id = models.ObjectIdField()
    amount = models.IntegerField()
    date = models.DateField()
    spentOn = models.CharField(max_length=255)


class Incomes(models.Model):
    income = models.ArrayField(
        model_container=Income
    )
    users = models.ArrayReferenceField(
        to=User,
        on_delete=models.CASCADE,
    )
    objects = models.DjongoManager()

    def __str__(self):
        return self.income
