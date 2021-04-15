import Navbar from './components/navigation/Navbar'
import MovieDetail from './components/movie_detail/MovieDetail'
import AllMovies from './components/all_movies/AllMovies'
import MovieAdd from './components/all_movies/MovieAdd'
import MovieAdded from './components/all_movies/MovieAdded'
import MovieEdit from './components/movie_detail/MovieEdit'
import About from './components/about_us/About'
import Contact from './components/contact/Contact'
import DeleteMovie from './components/movie_detail/DeleteMovie'
import MovieEdited from './components/movie_detail/Edited'
import AddGenre from './components/add/AddGenre'
import AddActor from './components/add/AddActor'
import AddProducer from './components/add/AddProducer'
import AddCountry from './components/add/AddCountry'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App(){

  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/movies/add" exact component={MovieAdd} />
                <Route path="/movies/deleted/:id" exact component={DeleteMovie} />
                <Route path="/movies/:id/edit" exact component={MovieEdit} />
                <Route path="/movies/:id" exact component={MovieDetail} />
                <Route path="/movies" exact component={AllMovies} />
                <Route path="/add_genre/" exact component={AddGenre} />
                <Route path="/add_actor/" exact component={AddActor} />
                <Route path="/add_producer/" exact component={AddProducer} />
                <Route path="/add_country/" exact component={AddCountry} />
                <Route path="" exact component={Navbar} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
