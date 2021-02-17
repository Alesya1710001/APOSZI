from django.urls import path

from . import views

urlpatterns = [
    path('', views.movie_list, name='movie_list'),
    path('contact/', views.contact, name='contact'),
    path('about_us/', views.about_us, name='about_us'),
]
