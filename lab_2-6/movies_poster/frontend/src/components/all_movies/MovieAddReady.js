import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function MovieAddReady(){

    const[movie, setMovie] = useState([])

    useEffect(() => {
        axios({
            method: "POST",
            dataType: "jsonp",
            url: "http://127.0.0.1:8000/poster/movies/"
        }).then(response => {
            setMovie(response.data)
        })
    }, [])

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


     </div>

  );
}

export default MovieAddReady;
