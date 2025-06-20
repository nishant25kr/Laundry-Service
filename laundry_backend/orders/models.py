from django.db import models

# Create your models here.


from mongoengine import Document, StringField, DateTimeField, ListField, DictField
from datetime import datetime
from django.contrib.auth.models import AbstractUser
from django.db import models

class Order(Document):
    name = StringField(required=True)
    phone = StringField(required=True)
    email = StringField()

    pickup_address = StringField(required=True)
    pickup_datetime = DateTimeField()
    delivery_address = StringField()
    delivery_datetime = DateTimeField()

    clothes = DictField() 
    services = ListField(StringField())
    notes = StringField()
    payment_mode = StringField(choices=["COD", "Online"])
    
    status = StringField(default="pending")
    created_at = DateTimeField(default=datetime.utcnow)
    meta = {'collection': 'orders'}




# class CustomUser(AbstractUser):
#     phone = models.CharField(max_length=15, blank=True)

#     def __str__(self):
#         return self.username
