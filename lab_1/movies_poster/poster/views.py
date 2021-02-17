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


def poster(request):
    movies = Movie.objects.all()
    return render(request, 'poster/poster.html', {'movies': movies})


def movie_detail(request, pk):
    movie = Movie.objects.get(pk=pk)
    genres = Movie.objects.get(pk=pk).genre.all()
    producers = Movie.objects.get(pk=pk).producer.all()
    countries = Movie.objects.get(pk=pk).country.all()
    actors = Movie.objects.get(pk=pk).actor.all()
    return render(request, 'poster/movie_detail.html', {'movie': movie, 'genres': genres, 'producers': producers,
                                                        'countries': countries, 'actors': actors})
