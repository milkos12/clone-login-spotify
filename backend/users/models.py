from django.db import models
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
import uuid
import bcrypt

class User(models.Model):

    id = models.UUIDField(primary_key=True, default= uuid.uuid4, editable=False)
    full_name = models.CharField(max_length=60, null=False)
    last_name = models.CharField(max_length=60, null=False)
    username = models.CharField(max_length=30, null=False)
    email = models.CharField(max_length=30, null=False)
    password = models.CharField(max_length=128, null=False)

    authentication_classes = [JWTAuthentication]
    permission_class = [IsAuthenticated]

    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith('bcrypt$'):
            self.password = bcrypt.hashpw(self.password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        super(User, self).save(*args, **kwargs)
   
