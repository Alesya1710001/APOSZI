from django.urls import path

from . import views

urlpatterns = [
    path('', views.movie_list, name='movie_list'),
    path('contact/', views.contact, name='contact'),
    path('about_us/', views.about_us, name='about_us'),
    path('all_movies/', views.poster, name='all_movies'),
    path('poster/<int:pk>/', views.movie_detail, name='movie_detail'),
]
