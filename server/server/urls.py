
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('users.urls')),
]
