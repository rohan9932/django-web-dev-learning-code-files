from django.contrib import admin
from django.urls import path

from django.http import HttpResponse
from . import views

def home(request):
    #everything in django is just for making the code of view part easier
    fruits = ["Apple", "Banana", "PineApple"]
    final_txt = "<ol>"
    for fruit in fruits:
        final_txt += f"<li>My favourite fruit: {fruit}</li>" 
    final_txt += "</ol>"
    return HttpResponse(final_txt)

def heart(request):
    return HttpResponse("<h1>Amar bashai tomar basha!</h1>")

# used to connect routes
urlpatterns = [
    path("admin/", admin.site.urls), # path(route, where to go)
    # path("amarbasha/", home),
    # path("amarbasha/tomarbasha/", heart),
    path("views/", views.home), #created a view here on the views/ route
]
