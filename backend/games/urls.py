from django.urls import path
from . import views
from .views import GameListView
from .views import GameDetailView

urlpatterns = [
    path('<int:pk>/', GameDetailView.as_view()),    
    path('', GameListView.as_view()),
]