from .views import CookieTokenRefreshView, CookieTokenObtainPairView
from django.urls import path, include

urlpatterns = [
    path('jwt/create/', CookieTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('jwt/refresh/',
         CookieTokenRefreshView.as_view(), name='token_refresh'),
]
