from django.urls import path
from . import views
from .views import ItemListView
from .views import ItemDetailView

urlpatterns = [
    path('<int:pk>', ItemDetailView.as_view()),
    path('', ItemListView.as_view())
]