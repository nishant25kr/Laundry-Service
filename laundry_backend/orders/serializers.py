# orders/serializers.py
from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.hashers import make_password

class SignupSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        return CustomUser(
            username=validated_data['username'],
            email=validated_data['email'],
            password=make_password(validated_data['password'])
        ).save()




