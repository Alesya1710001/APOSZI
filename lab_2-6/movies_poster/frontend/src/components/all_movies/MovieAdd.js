import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function MovieAdd(){

const[genre, setGenre] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            dataType: "jsonp",
            url: "http://127.0.0.1:8000/poster/genres/"
        }).then(response => {
            setGenre(response.data)
        })
    }, [])

    const[country, setCountry] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            dataType: "jsonp",
            url: "http://127.0.0.1:8000/poster/countries/"
        }).then(response => {
            setCountry(response.data)
        })
    }, [])

    const[producer, setProducer] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            dataType: "jsonp",
            url: "http://127.0.0.1:8000/poster/producers/"
        }).then(response => {
            setProducer(response.data)
        })
    }, [])

    const[actor, setActor] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            dataType: "jsonp",
            url: "http://127.0.0.1:8000/poster/actors/"
        }).then(response => {
            setActor(response.data)
        })
    }, [])

    const genre_opt = []

    for(let g of genre){
        let option = {value: g.genre_name, label: g.genre_name}
        genre_opt.push(option)
    }

    const actor_opt = []

    for(let a of actor){
        let option = {value: a.actor_name, label: a.actor_name}
        actor_opt.push(option)
    }


    const producer_opt = []

    for(let p of producer){
        let option = {value: p.surname, label: p.surname}
        producer_opt.push(option)
    }


    const country_opt = []

    for(let c of country){
        let option = {value: c.country_name, label: c.country_name}
        country_opt.push(option)
    }

    function Submit(e){
    e.preventDefault();
    const genre = []
    const country = []
    const actor = []
    const producer = []

    try{
    for (let g of e.target.genre){
       console.log(g.value)
       let  genre_dict = {
            'genre_name': g.value
        }
        genre.push(genre_dict);
    }
    } catch (TypeError){
         genre.push({'genre_name': e.target.genre.value});
         console.log(e.target.genre.value)
    }

    try{
    for(let c of e.target.country){
        console.log(c.value)
        let  country_dict = {
            'country_name': c.value
        }
        country.push(country_dict);
    }
    } catch(TypeError){
        country.push({'country_name': e.target.country.value});
         console.log(e.target.country.value)
    }

    try{
        for (let a of e.target.actor){
            console.log(a.value)
            let actor_dict = {
                'actor_name': a.value
            }
            actor.push(actor_dict);
        }
    } catch(TypeError){
        actor.push({'actor_name': e.target.actor.value});
         console.log(e.target.actor.value)
    }

    try{
    for (let p of e.target.producer){
        console.log(p.value)
        let producer_dict = {
            'surname': p.value
        }
        producer.push(producer_dict);
    }
    } catch(TypeError){
        producer.push({'surname': e.target.producer.value});
         console.log(e.target.producer.value)
    }


    const data = {
        'movie_name': e.target.elements.movie_name.value,
        'year': e.target.elements.year.value,
        'genre': genre,
        'country': country,
        'producer': producer,
        'actor': actor,
        'plot': e.target.elements.plot.value,

    }

    console.table(data)

        axios({
            method: "POST",
            data: data,
            headers: {
            'Content-type' : 'application/json'
            },
            url: "http://127.0.0.1:8000/poster/movies/"
        }).then(response => {
            console.log(response.data)
        })

        window.history.back()
  }

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

    <div className="container movie_add_page">
        <form onSubmit={Submit}>
            <div className="name_label one_label">
                <label>Название: </label>
                <input type="text" name="movie_name" autocomplete="off" required />
            </div>

            <div className="year_label one_label">
                <label>Год: </label>
                <input type="number" name="year" autocomplete="off" required />
            </div>

            <div className="genre_label one_label">
                <label>Жанр: </label>
                <Select
                    defaultValue = {[]}
                    isMulti
                    isRequired
                    name="genre"
                    className="select"
                    options={genre_opt}
                />
                <Link to={{pathname: `/add_genre/`, fromDashboard: false }} className="plus_btn"><i class="las la-plus-circle"></i></Link>
            </div>

            <div className="country_label one_label">
                <label>Страна:</label>
                <Select
                    defaultValue={[]}
                    isMulti
                    isRequired
                    name="country"
                    className="select"
                    options={country_opt}
                />
                <Link to={{pathname: `/add_country/`, fromDashboard: false }} className="plus_btn"><i class="las la-plus-circle"></i></Link>
            </div>

            <div class="producer_label one_label">
                <label>Режиссер:</label>
                <Select
                    defaultValue={[]}
                    isMulti
                    isRequired
                    name="producer"
                    className="select"
                    options={producer_opt}
                />
                 <Link to={{pathname: `/add_producer/`, fromDashboard: false }} className="plus_btn"><i class="las la-plus-circle"></i></Link>
            </div>

            <div class="actor_label one_label">
                <label>В главных ролях:</label>
                <Select
                    defaultValue={[]}
                    isMulti
                    isRequired
                    name="actor"
                    className="select"
                    options={actor_opt}
                />

                 <Link to={{pathname: `/add_actor/`, fromDashboard: false }} className="plus_btn"><i class="las la-plus-circle"></i></Link>
            </div>

            <div class="plot_label one_label">
                <label>Описание:</label>
                <textarea type="text" name="plot" autocomplete="off" required />
            </div>

            <div className="form_btn" style={{"text-align": "right"}}>
                <button type="submit" className="btn btn-primary btn-gradient" value="Submit">Добавить</button>
            </div>
        </form>
    </div>
</div>
 );
}

export default MovieAdd;
