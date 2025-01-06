from django.urls import path
from .views import *

urlpatterns = [
    path('members/', members , name='members'),
]












