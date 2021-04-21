import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function DeleteMovie({match}){

    const[movie] = useState({})
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "DELETE",
            dataType: "jsonp",
            url: `http://127.0.0.1:8000/poster/movies/${id}`
        }).then(response => {
            console.log(response.data)
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

    <div className="container" style={{"text-align": "center"}}>
        <div style={{"text-align": "center", "font-size": "25px", padding: "50px"}}>Фильм удален</div>
        <Link className="btn btn-gradient" style={{"margin-bottom": "20%"}} to={{pathname: `/movies`, fromDashboard: false }}>К списку фильмов</Link>
    </div>
  </div>
  );
}

export default DeleteMovie;
