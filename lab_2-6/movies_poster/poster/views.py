from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response

from poster.models import Movie, Actor, Producer, Country, Genre
from .serializers import *


def index(request):
    return render(request, 'index.html', {})


def movies_detail(request, id):
    return render(request, 'index.html', {})


class MoviesViewSet(viewsets.ModelViewSet):
    serializer_class = MoviesSerializer

    def get_queryset(self):
        movies = Movie.objects.all()
        return movies

    def create(self, request, *args, **kwargs):
        data = request.data

        new_movie = Movie.objects.create(movie_name=data['movie_name'], plot=data['plot'], year=data['year'])
        new_movie.save()

        for genre in data['genre']:
            try:
                genre_obj = Genre.objects.get(genre_name=genre['genre_name'])
            except ObjectDoesNotExist:
                new_genre = Genre.objects.create(genre_name=genre['genre_name'])
                new_genre.save()
                genre_obj = new_genre

            new_movie.genre.add(genre_obj)

        for actor in data['actor']:
            try:
                actor_obj = Actor.objects.get(actor_name=actor['actor_name'])
            except ObjectDoesNotExist:
                new_actor = Actor.objects.create(actor_name=actor['actor_name'])
                new_actor.save()
                actor_obj = new_actor

            new_movie.actor.add(actor_obj)

        for producer in data['producer']:
            try:
                producer_obj = Producer.objects.get(surname=producer['surname'])
            except ObjectDoesNotExist:
                new_producer = Producer.objects.create(surname=producer['surname'])
                new_producer.save()
                producer_obj = new_producer

            new_movie.producer.add(producer_obj)

        for country in data['country']:
            try:
                country_obj = Country.objects.get(country_name=country['country_name'])
            except ObjectDoesNotExist:
                new_country = Country.objects.create(country_name=country['country_name'])
                new_country.save()

            new_movie.country.add(country_obj)

        serializer = MoviesSerializer(new_movie)

        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        movie_obj = self.get_object()
        data = request.data

        if 'genre' in data:
            movie_obj.genre.clear()

            for genre in data['genre']:
                try:
                    genre_obj = Genre.objects.get(genre_name=genre['genre_name'])
                except ObjectDoesNotExist:
                    new_genre = Genre.objects.create(genre_name=genre['genre_name'])
                    new_genre.save()
                    genre_obj = new_genre

                movie_obj.genre.add(genre_obj)

        if 'producer' in data:
            movie_obj.producer.clear()

            for producer in data['producer']:
                try:
                    producer_obj = Producer.objects.get(surname=producer['surname'])
                except ObjectDoesNotExist:
                    new_producer = Producer.objects.create(surname=producer['surname'])
                    new_producer.save()
                    producer_obj = new_producer

                movie_obj.producer.add(producer_obj)

        if 'country' in data:
            movie_obj.country.clear()

            for country in data['country']:
                try:
                    country_obj = Country.objects.get(country_name=country['country_name'])
                except ObjectDoesNotExist:
                    new_country = Country.objects.create(country_name=country['country_name'])
                    new_country.save()

                movie_obj.country.add(country_obj)

        if 'actor' in data:
            movie_obj.actor.clear()

            for actor in data['actor']:
                try:
                    actor_obj = Actor.objects.get(actor_name=actor['actor_name'])
                except ObjectDoesNotExist:
                    new_actor = Actor.objects.create(actor_name=actor['actor_name'])
                    new_actor.save()
                    actor_obj = new_actor

                movie_obj.actor.add(actor_obj)

        serializer = MoviesSerializer(
            instance=movie_obj,
            data=data
        )

        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


class GenresViewSet(viewsets.ModelViewSet):
    serializer_class = GenreSerializer

    def get_queryset(self):
        genres = Genre.objects.all()
        return genres

    def create(self, request, *args, **kwargs):
        data = request.data

        new_genre = Genre.objects.create(genre_name=data['genre_name'])
        new_genre.save()

        serializer = GenreSerializer(new_genre)

        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        genre_obj = self.get_object()
        data = request.data

        serializer = GenreSerializer(
            instance=genre_obj,
            data=data
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


class ActorsViewSet(viewsets.ModelViewSet):
    serializer_class = ActorSerializer

    def get_queryset(self):
        actors = Actor.objects.all()
        return actors

    def create(self, request, *args, **kwargs):
        data = request.data

        new_actor = Actor.objects.create(actor_name=data['actor_name'])
        new_actor.save()

        serializer = ActorSerializer(new_actor)

        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        actor_obj = self.get_object()
        data = request.data

        serializer = ActorSerializer(
            instance=actor_obj,
            data=data
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


class ProducersViewSet(viewsets.ModelViewSet):
    serializer_class = ProducerSerializer

    def get_queryset(self):
        producers = Producer.objects.all()
        return producers

    def create(self, request, *args, **kwargs):
        data = request.data

        new_producer = Producer.objects.create(surname=data['surname'])
        new_producer.save()

        serializer = ProducerSerializer(new_producer)

        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        producer_obj = self.get_object()
        data = request.data

        serializer = ProducerSerializer(
            instance=producer_obj,
            data=data
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


class CountriesViewSet(viewsets.ModelViewSet):
    serializer_class = CountrySerializer

    def get_queryset(self):
        countries = Country.objects.all()
        return countries

    def create(self, request, *args, **kwargs):
        data = request.data

        new_country = Country.objects.create(country_name=data['country_name'])
        new_country.save()

        serializer = CountrySerializer(new_country)

        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        country_obj = self.get_object()
        data = request.data

        serializer = CountrySerializer(
            instance=country_obj,
            data=data
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


'''
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
        try:
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
        except JSONDecodeError:
            model = Movie()
            form = AddMovieForm(request.POST, instance=model)
            if form.is_valid():
                new_movie = form.save()
            return HttpResponseRedirect(reverse('all_movies'))


def movie_detail(request, pk):
    movie = Movie.objects.get(pk=pk)
    if request.method == 'GET':
        form = AddMovieForm(instance=movie)
        genres = Movie.objects.get(pk=pk).genre.all()
        producers = Movie.objects.get(pk=pk).producer.all()
        countries = Movie.objects.get(pk=pk).country.all()
        actors = Movie.objects.get(pk=pk).actor.all()
        return render(request, 'poster/movie_detail.html', {'movie': movie, 'genres': genres, 'producers': producers,
                                                            'countries': countries, 'actors': actors, 'form': form})

    elif request.method == 'POST':
        form = AddMovieForm(request.POST, instance=movie)
        try:
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
        except JSONDecodeError:
            if form.is_valid():
                update_movie = form.save()
                update_movie.save()
                print('movie is edited')
            return HttpResponseRedirect('')


def delete_movie(request, pk):
    movie = Movie.objects.get(pk=pk)
    movie.delete()
    return HttpResponseRedirect(reverse('all_movies'))
'''
