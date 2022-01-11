from django.urls import path
from . import views
from .views import ZoneListView
from .views import ZoneDetailView

urlpatterns = [
    path('<int:pk>', ZoneDetailView.as_view()),
    path('', ZoneListView.as_view()),
]