from django.db import models

# Create your models here.
#Django internally transforms the code according to the connected database
#Django ORM(Object Relational Mapper)

class Blog(models.Model): #for accessing Model class feauture(CRUD in DB)
    # id = models.IntegerField() #INT -> Not needed as Model creates it automatically
    title = models.CharField(max_length=255) #VARCHAR
    description = models.TextField() #TEXT
    isActive = models.BooleanField() #BOOLEAN 

    #django handles these automatically
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

 