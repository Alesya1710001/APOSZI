import json
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
import pdb


from poster.models import Movie, AddMovieForm, Actor, Producer, Country


def movie_list(request):
    movies = Movie.objects.all()[:3]
    return render(request, 'poster/movie_list.html', {'movies': movies})


def contact(request):
    return render(request, 'poster/contact.html')


def about_us(request):
    return render(request, 'poster/about.html')


def poster(request):
    if request.method == 'GET':
        movies = Movie.objects.all()
        form = AddMovieForm()
        return render(request, 'poster/poster.html', {'movies': movies, 'form': form})
    elif request.method == 'POST':
        pdb.set_trace()
        if request.is_ajax:
            ajax_data = json.loads(request.body.decode('utf-8'))
            if ajax_data.get('action') == 'save_actor':
                actor = Actor(actor_name=ajax_data.get('value'))
                actor.save()
                return JsonResponse({
                    'id': actor.id,
                }, status=200)
            elif ajax_data.get('action') == 'save_producer':
                producer = Producer(surname=ajax_data.get('value'))
                producer.save()
                return JsonResponse({
                    'id': producer.id,
                }, status=200)
            elif ajax_data.get('action') == 'save_country':
                country = Country(country_name=ajax_data.get('value'))
                country.save()
                return JsonResponse({
                    'id': country.id,
                }, status=200)
            elif ajax_data.get('action') == 'save_genre':
                genre = Country(genre_name=ajax_data.get('value'))
                genre.save()
                return JsonResponse({
                    'id': genre.id,
                }, status=200)
        else:
            model = Movie()
            form = AddMovieForm(request.POST, instance=model)
            if form.is_valid():
                new_movie = form.save()
            return HttpResponseRedirect(reverse('poster:all_movies'))


def movie_detail(request, pk):
    movie = Movie.objects.get(pk=pk)
    genres = Movie.objects.get(pk=pk).genre.all()
    producers = Movie.objects.get(pk=pk).producer.all()
    countries = Movie.objects.get(pk=pk).country.all()
    actors = Movie.objects.get(pk=pk).actor.all()
    return render(request, 'poster/movie_detail.html', {'movie': movie, 'genres': genres, 'producers': producers,
                                                        'countries': countries, 'actors': actors})
