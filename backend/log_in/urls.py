from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserListView.as_view(), name='user-list'),
    path('users/create/', views.UserCreateUser.as_view(), name='user-create'),
    path('users/tokends/', views.createManualTokens.as_view(), name='user-tokends')
]