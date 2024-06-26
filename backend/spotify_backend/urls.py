from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    #path('api/token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('api/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('v1/users', include('users.urls')),
    path('v1/auth', include('authentication.urls'), name='token_obtain_pair')
]
