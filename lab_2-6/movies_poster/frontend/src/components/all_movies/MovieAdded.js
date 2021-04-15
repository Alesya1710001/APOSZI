import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function MovieAdded(){

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
    <div style={{"text-align": "center", "font-size": "25px", padding: "50px"}}>Фильм добавлен</div>
     <Link className="btn btn-gradient" style={{"margin-bottom": "20%"}} to={{pathname: `/movies`, fromDashboard: false }}>К списку фильмов</Link>
  </div>
  </div>
  );
}

export default MovieAdded;
