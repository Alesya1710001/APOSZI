import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function About(){

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
     <div className="container about_us">

		<div className="text_about_us">
		    <div className="title">О нас</div>

		    <p>Добро пожаловать в наш скромный общажный кинотеатр!</p>
		    <p>Чудории (сокращенно от "Чудесные истории") - это лучшие фильмы ever.</p>
            <p>Чудории - это место, где вы можете посмотреть свои самые любимые мультики.</p>
            <p>Чудории - это уютнейшая атмосфера.</p>
            <p>Чудории - это качество звука и изображения.</p>
            <p>Чудории - это самый вкусный буфет с лучшим в мире чаем!</p>
            <p>Чудории - это приятная компания в виде наших чудесных сотрудников.</p>


		<img className="dikaprio" src="../../static/images/dikaprio.png" />

            <div className="chudorii">
                <p>Честные</p>
                <p>Ударные</p>
                <p>Дружелюбные</p>
                <p>Оригинальные</p>
                <p>Респектабельные</p>
                <p>Интереснейшие</p>
                <p>Искренние</p>
            </div>

            <p>Чудории - это все о нас! Вэлком!!!</p>



        <div>
		<div className="title">Сотрудники</div>
		    <p>Самые чудесные сотрудники только у нас! Знакомьтесь:</p>
		    <div className="staff_bar">
			    <div className="one_person alesya">
				    <img className="person_photo" src="../../static/images/alesya.jpg" />
				    <p>Aлеся Кроп</p>
			    </div>
			    <div className="one_person rita">
				    <img className="person_photo" src="../../static/images/rita.jpg" />
				    <p>Рита Прохожая</p>
			    </div>
		    </div>
	    </div>
    </div>
  </div>
  </div>
  );
}

export default About;
