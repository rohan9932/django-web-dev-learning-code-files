from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string
from .models import Blog

# Create your views here.

def home(request):
    blogs = Blog.objects.all() #SELECT * FROM myblog_blog;

    context = {
        "name": "Rohan",
        "roll": 122,
        "blogs": blogs,
    }
    # final_str = render_to_string(
    #     template_name="template.html",
    #     context=context,
    # )
    # return HttpResponse(final_str)

    return render(request, "template.html", context)