import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App(){

    const[movie, setMovies] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/test/"
        }).then(response =>{
            setMovies(response.data)
        })
    }, [])

  return (
    <div className="App">
    <h1>Hello</h1>
     <ul>
        {
        movie.map(p =>
            <li key={p.id}>{p.name}</li>
        )}
     </ul>
    </div>
  );
}

export default App;
