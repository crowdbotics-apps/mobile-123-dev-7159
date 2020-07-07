from rest_framework import authentication
from users.models import YYhgfhfg
from .serializers import YYhgfhfgSerializer
from rest_framework import viewsets


class YYhgfhfgViewSet(viewsets.ModelViewSet):
    serializer_class = YYhgfhfgSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = YYhgfhfg.objects.all()
