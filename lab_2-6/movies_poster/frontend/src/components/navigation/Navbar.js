import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import style from '../../static/style.css';

function Navbar(){

    const[movies, setMovies] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/poster/movies/"
        }).then(response => {
            setMovies(response.data)
        })
    }, [])

  return (
    <div className="App">
            <header>
                <div className="container">
                    <a href="#">CHUDORII</a>


                    <img className="part" src="../../static/images/fines.jpg"/>
                </div>
            </header>

            <div className="choose_bar">
               <div className="container">
                   <a href="#">Афиша</a>
                   <a href="#">О нас</a>
                   <a href="#">Контакты</a>
                   <a href="#">Войти</a>
               </div>

            </div>

        <div className="about_company">
            <div className="container">
                <div className="text_about">
                    <p>Вас приветствует чудеснейший кинотеатр (для чудеснейших зрителей)!</p>
                    <p>Здесь мы рассказываем Вам чудеснейшие истории на чудеснейшем экране (проекторе в общаге)!</p>
                    <p>Во время просмотра вы получите чудеснейшие эмоции в чудеснейшей компании (нас)!</p>
                    <p>После просмотра мы можем поиграть в настолки и выпить имбирного чаю!</p>
                    <p>Приходите к нам - получайте живые эмоции и рассказывайте всем эти чудесные истории - ЧУДОРИИ!!!
                    </p>
                </div>
            </div>
        </div>


        <img className="malifisenta" src="../../static/images/malifisenta.png"/>

        <div className="movie_bar">
            <div class="container movie_items">
                {movies.map(m =>(
                    <div className="item" key={m.id}>
                        <div className="item_title info">
                            <p className="part_item">{m.movie_name}</p>
                        </div>
                        <div className="item_year info">
                            <p className="part_item">{m.year}</p>
                        </div>
                        <div className="item_type info">
                            <p className="part_item">{m.type}</p>
                        </div>
                        <div className="button-wrapper part">
                            <a className="btn btn-gradient" href="#">Подробнее</a>
                        </div>
                    </div>
                ))}
                <div className="all">
                    <a href="#" className="btn btn-gradient">Вся афиша</a>
                </div>
            </div>
        </div>

        <footer>
            <div className="contact_inform container">
                <div className="phone left part">
                    <a href="tel:+375298619902">+375 (29) 861 - 99 - 02</a>
                    <a href="tel:+375333164922">+375 (33) 316 - 49 - 22</a>
                </div>

                <div className="right part">
                    <div className="address">
                        <p>г. Минск, ул. Л. Беды, д.4к1, кв. 601-б</p>
                    </div>
                    <div className="developers">
                        <p>Created by us</p>
                    </div>
                </div>

            </div>
         <img className="graviti" src="../../static/images/graviti.png"/>

        </footer>


    </div>
  );
}

export default Navbar;
