from rest_framework.routers import DefaultRouter
from django.urls import path, include

from . import views
from .views import *

router = DefaultRouter()
router.register('movies', MoviesViewSet, basename='movies')
router.register('genres', GenresViewSet, basename='genres')
router.register('countries', CountriesViewSet, basename='countries')
router.register('producers', ProducersViewSet, basename='producers')
router.register('actors', ActorsViewSet, basename='actors')


urlpatterns = [
    path('', include(router.urls)),
]

''' path('', views.movie_list, name='movie_list'),
   path('api/movies', MoviesViewSet.as_view()),
   path('contact/', views.contact, name='contact'),
   path('about_us/', views.about_us, name='about_us'),
   path('all_movies/', views.poster, name='all_movies'),
   path('<int:pk>/', views.movie_detail, name='movie_detail'),
   path('<int:pk>/delete', views.delete_movie, name='delete_movie'),'''