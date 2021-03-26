from django.contrib import admin

from poster.models import Movie, Country, Producer, Genre, Actor

admin.site.register(Movie)
admin.site.register(Country)
admin.site.register(Producer)
admin.site.register(Genre)
admin.site.register(Actor)
