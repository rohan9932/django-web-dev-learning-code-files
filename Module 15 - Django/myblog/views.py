from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Hi from Views.home</h1>")