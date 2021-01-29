from gCirc_app import views 
from django.urls import path 

app_name = "gCirc_app"

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('onedit/', views.OneEditGameView.as_view(), name='one_edit'),
]