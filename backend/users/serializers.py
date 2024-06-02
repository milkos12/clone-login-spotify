from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'full_name', 'last_name', 'username', 'email', 'password']
        
    # Not resposes includes the password
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation.pop('password')
        return representation