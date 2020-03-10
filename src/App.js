import React from "react";
import "./PokeCardCss.css";
import PokeCard from "./PokeCard.js";
import PokePick from "./PokePick.js";
import PokeMon from "./PokeMon.js";
import { withRouter } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import PokemonFavorites from "./PokemonFavorites.js";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }

  componentDidMount() {
    axios.get("/favorite/").then(res => this.setState({ favorites: res.data }));
  }

  addUserFavorites = pokemon => {
    axios
      .post("/favorite/add", { name: pokemon.name, url: pokemon.url })
      .then(res =>
        this.setState(prev => ({ favorites: [...prev.favorites, res.data] }))
      );
  };

  render() {
    return (
      <div className="main-container">
        <nav>
          <ul>
            <li>
              <Link to="/" className="home-link">
                Home
              </Link>
              <br></br>
            </li>
            <li>
              <Link to="/pokemon" className="inv-link">
                Pokedex
              </Link>
              <br></br>
            </li>
            <li>
              <Link to="/favorites" className="fav-link">
                Favorites
              </Link>
              <br></br>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon" render={() => <PokeCard />} />
          <Route
            exact
            path="/pokemon/:name"
            render={rProps => (
              <PokeMon addUserFavorite={this.addUserFavorites} {...rProps} />
            )}
          />
          <Route path="/favorites">
            <PokemonFavorites
              state={this.state.favorites}
              getUserFavorites={this.getUserFavorites}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
