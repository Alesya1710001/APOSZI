import Navbar from './components/navigation/Navbar'
import MovieDetail from './components/movie_detail/MovieDetail'
import AllMovies from './components/all_movies/AllMovies'
import About from './components/about_us/About'
import Contact from './components/contact/Contact'
import DeleteMovie from './components/movie_detail/DeleteMovie'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App(){

  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/movies/deleted/:id" exact component={DeleteMovie} />
                <Route path="/movies/:id" exact component={MovieDetail} />
                <Route path="/movies" exact component={AllMovies} />
                <Route path="" exact component={Navbar} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
