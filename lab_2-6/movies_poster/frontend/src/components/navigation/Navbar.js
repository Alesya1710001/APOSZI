import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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

         <head>
            <title>
                Кинотеатр "Чудории"
            </title>
             <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
            <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Luckiest+Guy'/>
        </head>

            <header>
                <div className="container">
                    <div className="center-outer part">
                            <div className="center-inner">
                                <div className="bubbles">
                                    <a href="#">CHUDORII</a>
                                </div>
                            </div>
                        </div>
                   <img className="part" src="../../static/images/fines.jpg" />
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


        <img className="malifisenta" src="../../static/images/malifisenta.png"  style={{opacity:"30%"}}/>

        <div className="movie_bar">

            <div class="container movie_items">
                {movies.map(m =>(
                    <div className="item" key={m.id} style={{position: "relative", display: "block ruby", width: "100%", padding: "3%",border: "1px solid blueviolet", "margin-bottom": "3%", "background-color": "#1F1F3A", opacity: "90%", "z-index":"1000"}}>
                        <div class="information part" style={{position: "relative", width: "50%"}}>
                            <div className="item_title info" style={{"font-size": "18px", "text-transform": "uppercase"}}>
                                <p>{m.movie_name}</p>
                            </div>
                            <div className="item_year info" style={{"font-size": "18px", "text-transform": "uppercase"}}>
                                <p>{m.year}</p>
                            </div>
                            <div className="item_type info" style={{"font-size": "18px", "text-transform": "uppercase"}}>
                                <p>{m.type}</p>
                            </div>
                        </div>
                        <div className="button-wrapper part" style={{position: "relative", width: "50%",bottom: "25px"}}>
                            <Link className="btn btn-gradient" to={{pathname: `/movies/${m.id}/`, fromDashboard: false }}>Подробнее</Link>
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
