import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function AddCountry(){
    function Submit(e){
    e.preventDefault();
    const data = {
        'country_name': e.target.elements.name.value
    }

    axios({
        method: "POST",
        data: data,
        headers: {
        'Content-type' : 'application/json'
        },
        url: "http://127.0.0.1:8000/poster/countries/"
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

    <div className="container add_page">
        <form onSubmit={Submit}>
            <div className="name_label one_label">
                <label>Название страны: </label>
                <input type="text" name="name" autocomplete="off" required />
            </div>

            <div className="form_btn" style={{"text-align": "right"}}>
                <button type="submit" className="btn btn-primary btn-gradient" value="Submit">Добавить</button>
            </div>
        </form>
    </div>
</div>
  );
}

export default AddCountry;
