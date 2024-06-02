from django.urls import path
from . import views

urlpatterns = [
    path('/list/', views.UserListView.as_view(), name='user-list'),
    path('/create/', views.UserCreateUser.as_view(), name='user-create')
]