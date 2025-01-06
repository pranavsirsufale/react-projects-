from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def members(requrest):
    return HttpResponse('hello world')
