from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Incomes
from .serializers import IncomeSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST', 'DELETE'])
def income_list(request):
    if request.method == 'GET':
        income = Incomes.objects.all()
        income_serializer = IncomeSerializer(income, many=True)
        return JsonResponse(income_serializer.data, safe=False)
    elif request.method == 'POST':
        income_data = JSONParser().parse(request)
        income_serializer = IncomeSerializer(data=income_data)
        if income_serializer.is_valid():
            income_serializer.save()
            return JsonResponse(income_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(income_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
