import React, { useEffect, useState } from 'react';
import axios from 'axios';
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


    function Submit(e){
    e.preventDefault();
    const genre = []
    const country = []
    const actor = []
    const producer = []

    for (let item of e.target.elements.genre.selectedOptions){
       let  genre_dict = {
            'genre_name': item.value
        }
        genre.push(genre_dict);
    }

    for (let item of e.target.elements.country.selectedOptions){
        let country_dict = {
            'country_name': item.value
        }
        country.push(country_dict);
    }

    for (let item of e.target.elements.actor.selectedOptions){
        let actor_dict = {
            'actor_name': item.value
        }
        actor.push(actor_dict);
    }

    for (let item of e.target.elements.producer.selectedOptions){
        let producer_dict = {
            'surname': item.value
        }
        producer.push(producer_dict);
    }


    const data = {
        'movie_name': e.target.elements.movie_name.value,
        'year': e.target.elements.year.value,
        'type': e.target.elements.type.value,
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

     <div className="container">
        <form onSubmit={Submit}>

         <div className="name_label one_label">
            <label>Название: </label>
               <input type="text" name="movie_name"  required />
         </div>


          <div className="year_label one_label">
            <label>Год: </label>
               <input type="text" name="year"  required />
          </div>

           <div className="type_label one_label" >
            <label>Тип: </label>
             <select name="type"  required>
                  <option>1</option>
                  <option>2</option>
             </select>
           </div>

            <div className="genre_label one_label">
                 <label>Жанр: </label>
               <select multiple name="genre"  required>
                 {genre.map(g =>(
                  <option>{g.genre_name}</option>
                  ))}
                </select>

            </div>


             <div className="country_label one_label">
                        <label>Страна:</label>
                      <select multiple name="country"  required>
                         {country.map(c =>(
                          <option>{c.country_name}</option>
                          ))}
                        </select>

                    </div>


                   <div class="producer_label one_label">
                        <label>Режиссер:</label>
                         <select multiple name="producer"  required>
                         {producer.map(p =>(
                          <option>{p.surname}</option>
                          ))}
                        </select>
                    </div>


                   <div class="actor_label one_label">
                        <label>В главных ролях:</label>
                        <select multiple name="actor"  required>
                         {actor.map(a =>(
                          <option>{a.actor_name}</option>
                          ))}
                        </select>
                    </div>


                   <div class="plot_label one_label">
                        <label>Описание:</label>
                        <textarea type="text" name="plot"  required />
                    </div>

                     <div className="modal-footer button-wrapper">
                        <button type="submit" className="btn btn-primary btn-gradient"  value="Submit" >Добавить</button>
                     </div>


          </form>
     </div>

   </div>

  );
}

export default MovieAdd;
