from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer  # serializer class

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)  # get serializer
        serializer.is_valid(raise_exception=True)  # check if serializer is valid
        user = serializer.save()  # save user
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,  # user serializer
                "token": AuthToken.objects.create(user)[1],  # create token
            }
        )


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer  # serializer class

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)  # get serializer
        serializer.is_valid(raise_exception=True)  # check if serializer is valid
        user = serializer.validated_data  # get user
        return Response(
            {
                "user": UserSerializer(
                    user, context=self.get_serializer_context()
                ).data,  # user serializer
                "token": AuthToken.objects.create(user)[1],  # create token
            }
        )

# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]  # permission class
    serializer_class = UserSerializer  # serializer class

    def get_object(self):
        return self.request.user  # get user