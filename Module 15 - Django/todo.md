1. What is Django?
   - Web Framework
2. Features of Django
   - Avg Speed
   - Can make a big application fast
   - Built in security
3. Advantages of Django
4. Setting up venv
5. Installing Django
   - pip install django
6. Creating a Django project
   - django-admin startproject myblog .
   - Structure: packagename startprojectcommand projectName projectLocation(optional)
7. Understanding the project structure
8. Running the development server
   - Browser Request -> Django urls.py -> urlpatterns -> find the url -> go to the func assinged
     -> Directly return the response to the browser
9. Understanding MVC(Model View Controller) and MVT(Model View Template)
   - MVC -> Model handles data(how data will be stored, how data is handled, the flow), View
     represent data to user and Controller controlls the flow suppose if a request is made first
     it will go to the controller. then controller will take data using model and using view
     represent it to user

   MVT -> Django follows it. View -> funcs in url works as view(+controller also) 
   Template -> the html template files processed for response
