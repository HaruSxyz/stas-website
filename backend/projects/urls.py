from django.urls import path
from . import views

urlpatterns = [
    path('', views.project_list, name='project_list'),
    path('add-project/', views.add_project, name='add_project'),
    path('<int:pk>/', views.project_detail, name='project_detail'),
]