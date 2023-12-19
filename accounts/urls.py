from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path("api/auth", include("knox.urls")),  # knox urls
    path("api/auth/register", RegisterAPI.as_view()),  # register api
    path("api/auth/login", LoginAPI.as_view()),  # login api
    path("api/auth/user", UserAPI.as_view()),  # user api
    path("api/auth/logout", knox_views.LogoutView.as_view(), name="knox_logout"),  # logout api
]
