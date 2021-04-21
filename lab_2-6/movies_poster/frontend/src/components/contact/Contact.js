import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../static/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends React.Component{

render() {
    const mapStyles = {
      width: "600px",
      height: "450px",
      frameborder:"0ps",
    };

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

            <div className="container contact">
                <div className="contact-part">
                    <div className="title">Контакты</div>

                    <div className="contact-block">
                        <p>220040, Республика Беларусь, г. Минск</p>
                        <p>ул. Л.Беды 4/1</p>
                        <p>метро Академия наук </p>
                    </div>

                    <div className="contact-block">
                        <p className="main">Тел: </p>
                        <p>+375 33 316 49 22 </p>
                        <p>+375 29 861 99 02 </p>
                    </div>

                    <div className="contact-block">
                        <p className="main">Instagram: </p>
                        <p>@pr_ritaa, </p>
                        <p>@alesyakrop </p>
                    </div>

                    <div className="contact-block">
                        <p className="main">e-mail: </p>
                        <p>prokhozhaya@gmail.com,</p>
                        <p>kropka171001@gmail.com </p>
                    </div>

                </div>

            <div className="contact-part map">

                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 53.9300411, lng: 27.588788605734674}}
                >
                    <Marker position={{lat:53.9300411, lng: 27.588788605734674}} />
                </Map>
            </div>
         </div>
   </div>
    );
  }
}

export default GoogleApiWrapper({
})(Maps);