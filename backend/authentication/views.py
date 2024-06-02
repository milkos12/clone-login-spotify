from django.shortcuts import render
import json
from django.http import JsonResponse
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import generics, permissions
from users.models import User
import bcrypt


# Verification existence user
class UserExistence:
    @staticmethod
    def check(user):
        try:
            # Searching for username
            return User.objects.get(username=user['username'])
        except User.DoesNotExist:
            try:
                # Searching for email
                return User.objects.get(email=user['email'])
            except User.DoesNotExist:
                return "user_not_exists"


class PasswordValidation:
    @staticmethod
    def validate(user, user_db):
        return bcrypt.checkpw(user['password'].encode('utf-8'), user_db.password.encode('utf-8'))


# Generate manual tokens
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        return {
            "refresh": str(token),
            "access": str(token.access_token)
        }
    

# Generate tokens manually
class CreateManualTokens(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    http_method_names = ['post']
    
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body.decode('utf-8'))
        user_check_result = UserExistence.check(data)
        tokens = {"code": ""}

        if user_check_result == "user_not_exists":
            tokens['code'] = "user_not_exists"
        else: 
            if PasswordValidation.validate(data, user_check_result):
                tokens = CustomTokenObtainPairSerializer.get_token(user_check_result)
            else:
                tokens['code'] = "password_error"

        return JsonResponse(tokens)
