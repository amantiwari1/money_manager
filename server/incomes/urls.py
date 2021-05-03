from django.conf.urls import url, include
from .views import income_list
urlpatterns = [
    url('income', income_list),
]
