from rest_framework import serializers
from .models import *

class FounderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Founder
        fields = ('founder_name','founder_avatar','founder_contact','founder_linkedin','founder_email')

class SectionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Section
        fields = ('heading','content')

class TestimonialSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Testimonial
        fields = ('name','content','image')