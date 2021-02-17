from django.http import HttpResponse
from django.shortcuts import render

from poster.models import Movie


def movie_list(request):
    movies = Movie.objects.all()[:3]
    return render(request, 'poster/movie_list.html', {'movies': movies})


def contact(request):
    return render(request, 'poster/contact.html')


def about_us(request):
    return render(request, 'poster/about.html')


