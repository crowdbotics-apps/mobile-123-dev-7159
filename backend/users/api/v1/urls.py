from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import YYhgfhfgViewSet

router = DefaultRouter()
router.register("yyhgfhfg", YYhgfhfgViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
