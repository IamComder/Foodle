from django.db import models

# Create your models here.
class Founder(models.Model):
    founder_name = models.CharField(max_length=50, blank=True, null=True)
    founder_avatar = models.ImageField(blank=True, null=True)
    founder_contact = models.IntegerField(blank=True, null=True)
    founder_linkedin = models.CharField(max_length=50, blank=True, null=True)
    founder_email = models.EmailField(max_length=254, blank=True, null=True)

    def __str__(self):
        return self.founder_name

class Section(models.Model):
    heading = models.CharField(max_length=50, blank=True, null=True)
    content = models.CharField(max_length=3000, blank=True, null=True)
    
class Testimonial(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    content = models.CharField(max_length=3000, blank=True, null=True)
    image = models.ImageField(blank=True, null=True)