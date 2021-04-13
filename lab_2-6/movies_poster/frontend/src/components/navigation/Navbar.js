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
            dataType: "jsonp",
            url: "http://127.0.0.1:8000/poster/movies/"
        }).then(response => {
            setMovies(response.data)
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

            <div className="container movie_items">
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
                    <Link className="btn btn-gradient" to={{pathname: `/movies/`, fromDashboard: false }}>Вся афиша</Link>
                </div>
            </div>
        </div>

     </div>

  );
}

export default Navbar;
