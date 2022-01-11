from django.urls import path
from . import views
from .views import LevelListView
from .views import LevelDetailView

urlpatterns = [
    path('<int:pk>/', LevelDetailView.as_view()),
    path('', LevelListView.as_view()),
]