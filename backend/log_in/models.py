from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class User(AbstractUser):
   # The AbatractUser contiens all that need for this model
   groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',  # Unique related_name
        blank=True,
        help_text='The groups this user belongs to.',
        related_query_name='custom_user',
    )


   user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions_set',  # Unique related_name
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='custom_user_permissions',
    )
   
   authentication_classes = [JWTAuthentication]
   permission_class = [IsAuthenticated]
   
