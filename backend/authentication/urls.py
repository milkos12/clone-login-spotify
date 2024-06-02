from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('/tokends/', views.CreateManualTokens.as_view(), name='user-tokends'),
    path('/tokends/refresh/', TokenRefreshView.as_view(), name='token-refresh')
]