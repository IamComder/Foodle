from django.db import models

# Create your models here.
class Founder(models.Model):
    founder_name = models.CharField(max_length=50)
    founder_avatar = models.ImageField()
    founder_contact = models.IntegerField()
    founder_linkedin = models.CharField(max_length=50)
    founder_email = models.EmailField(max_length=254)

    def __str__(self):
        return self.founder_name

class Section(models.Model):
    heading = models.CharField(max_length=50)
    content = models.CharField(max_length=3000)

class User(models.Model):
    name = models.CharField(max_length=40)
    email = models.EmailField()
    password = models.CharField(max_length=50)
    