from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Member

# Create your views here.
def home(request):
    homepage = loader.get_template('register.html')
    members = Member.objects.all().values()
    constext = {
        'mymembers':members,
    }
    return HttpResponse(
        homepage.render(constext,request)
    )


def members(requrest):
    return HttpResponse('hello world')
