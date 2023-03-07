from django.shortcuts import render
from .models import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from typing import OrderedDict
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from . import serializers
from django.http import HttpResponse

@api_view(["POST"])
def signup(request):
    if request.method == "POST":
        data = request.data
        username = data['username']
        email = data['email']
        password1 = data['password1']
        password2 = data['password2']

        if(password1==password2):
            my_user = User.objects.create_user(username=username,email=email,password=password1)
            my_user.save()
            return HttpResponse("SignUp Succesfull")
        else:
            return HttpResponse("Password not matched")
        
@api_view(["POST"])
def login(request):
    if request.method == "POST":
        data = request.data
        email = data['email']
        password = data['password']

        user = User.objects.get(email=email)
        if(user.password==password):
            return HttpResponse("Login Succesfull",login=True)
        else:
            return HttpResponse("Invalid Credentials",login=False)
    
@api_view(["GET"])
def testimonial(request):
    if request.method == "GET":
        testimonials = Testimonial.objects.all()
        testimonials_ser = serializers.TestimonialSerializer(testimonials, many=True)

        return Response(testimonials_ser.data)
    
@api_view(["GET"])
def founder(request):
    if request.method == "GET":
        founders = Founder.objects.all()
        founders_ser = serializers.FounderSerializer(founders, many=True)

        return Response(founders_ser.data)