from django.contrib import admin
from .models import Blog

# Register your models here.
# to CRUD on models(tables in DB)
admin.site.register(Blog)
