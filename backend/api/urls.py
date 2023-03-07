from django.urls import path, include
from . import views

urlpatterns = [
    path('signup',views.signup),
    path('login',views.login),
    path('founders',views.founder),
    path('testimonials',views.testimonial),
]