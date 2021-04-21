import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function MovieDetail({match}){

    const[movie, setMovies] = useState({})
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            dataType: "jsonp",
            url: `http://127.0.0.1:8000/poster/movies/${id}`
        }).then(response => {
            setMovies(response.data)
        })
    }, [id])


  return (
  <div>
    <div className="choose_bar">
        <div className="container">
            <Link to={{pathname: `/movies/`, fromDashboard: false }} >Афиша</Link>
            <Link to={{pathname: `/about/`, fromDashboard: false }}>О нас</Link>
            <Link to={{pathname: `/contact/`, fromDashboard: false }}>Контакты</Link>
            <Link href="#">Войти</Link>
        </div>
    </div>
    <div className="container">
        <div className="title">
            <p>{movie.movie_name}</p>
        </div>

        <div className="all_information">
            <div className="year line">
                <p> Год: &nbsp;</p>
                <p>{movie.year}</p>
            </div>

            <div className="genre line">
                <p>Жанр:&nbsp; </p>
                {movie.genre ? movie.genre.map((genre) => <p>{genre.genre_name}&nbsp; &nbsp;</p>): []}
            </div>

            <div className="producer line">
                <p>Режиссер:&nbsp; </p>
                {movie.producer ? movie.producer.map((producer) => <p>{producer.surname}&nbsp; &nbsp;</p>): []}
            </div>

            <div className="actor line">
                <p>В главных ролях: &nbsp; </p>
                {movie.actor ? movie.actor.map((actor) => <p>{actor.actor_name}&nbsp; &nbsp;</p>): []}
            </div>

            <div className="country line">
                <p>Страна: &nbsp;</p>
                {movie.country ? movie.country.map((country) => <p>{country.country_name}&nbsp; &nbsp;</p>): []}
            </div>

            <div className="about_movie">
                <p>{movie.plot}</p>
            </div>

            <div className="btn_bar">
                <Link className="btn btn-gradient"  to={{pathname: `/movies/deleted/${id}/`, fromDashboard: false }}>Удалить</Link>
                <Link className="btn btn-gradient" data-toggle="modal" data-target="#editMovieModal" to={{pathname: `/movies/${id}/edit`, fromDashboard: false }}>Изменить</Link>
            </div>
        </div>
    </div>
  </div>
  );
}

export default MovieDetail;
