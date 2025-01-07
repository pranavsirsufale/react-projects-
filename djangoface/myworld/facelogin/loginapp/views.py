from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Member

# Create your views here.
def home(request):
    htmlTemplate = loader.get_template('all_memeber.html')
    members = Member.objects.all().values()
    context = {
        'mymembers':members,
    }
    return HttpResponse(
        htmlTemplate.render(context,request)
    )


def members(requrest):
    return HttpResponse('hello world')
