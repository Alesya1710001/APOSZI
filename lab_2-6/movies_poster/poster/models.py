from django.db import models
from django.forms import ModelForm


class Genre(models.Model):
    genre_name = models.CharField(max_length=50, blank=False, null=False)

    def __repr__(self):
        return self.genre_name

    def __str__(self):
        return self.genre_name


class Country(models.Model):
    country_name = models.CharField(max_length=50, blank=False, null=False)

    def __repr__(self):
        return self.country_name

    def __str__(self):
        return self.country_name


class Producer(models.Model):
    surname = models.CharField(max_length=50, blank=False, null=False)

    def __repr__(self):
        return self.surname

    def __str__(self):
        return self.surname


class Actor(models.Model):
    actor_name = models.CharField(max_length=50, blank=False, null=False)

    def __repr__(self):
        return self.actor_name

    def __str__(self):
        return self.actor_name


class Movie(models.Model):
    movie_name = models.CharField(max_length=50, blank=False, null=False)
    year = models.IntegerField(blank=False, null=False, default=0)
    genre = models.ManyToManyField(Genre)
    country = models.ManyToManyField(Country)
    producer = models.ManyToManyField(Producer)
    actor = models.ManyToManyField(Actor)
    plot = models.TextField(blank=False, null=False)

    def __repr__(self):
        return self.movie_name

    def __str__(self):
        return self.movie_name


class AddMovieForm(ModelForm):
    class Meta:
        model = Movie
        fields = ['movie_name',
                  'year',
                  'genre',
                  'country',
                  'producer',
                  'actor',
                  'plot']
