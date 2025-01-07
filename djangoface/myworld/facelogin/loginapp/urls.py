from django.urls import path
from .views import *
urlpatterns = [
    path('' , home , name='home'),
    path('members/', members , name='members'),
    path('members/details/<int:id>',details,name='details')
]