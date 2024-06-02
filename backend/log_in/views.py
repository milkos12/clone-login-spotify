from rest_framework import generics, permissions
from rest_framework_simplejwt.tokens import Token
from django.contrib.auth import authenticate
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User
from .serializers import UserSerializer
import json 
from django.http import JsonResponse

class UserCreateUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    http_method_names = ['post']

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get']


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        # Extrac and convert the tokens refresh and access
        refresh = str(token) 
        access = str(token.access_token)



        return {
            "refresh": refresh,
            "access": access
        }
    
# Generate tokens manually

class createManualTokens(generics.CreateAPIView):

    http_method_names = ['post']

    def post(self, request, *args, **kwargs):
        # Get data from body request
        bodyUnicode = request.body.decode('utf-8')
        data = json.loads(bodyUnicode)

        #Conver body request data to object Type User
        objectUser = type('User', (object,), data)()
        tokens = MyTokenObtainPairSerializer.get_token(objectUser);

        return JsonResponse(tokens)
    
    
    