from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.
def home(request):
    homepage = loader.get_template('register.html')
    return HttpResponse(
        homepage.render()
    )


def members(requrest):
    return HttpResponse('hello world')














