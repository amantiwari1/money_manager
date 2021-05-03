from rest_framework import serializers
from .models import Incomes


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incomes
        fields = '__all__'
