import React from "react";
import "./App.css";
import axios from "axios";
import "./Home.css";
import { withRouter } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div className="poke-body">
      <nav className="navigation">
        <a href="/">
          <img
            class="logo"
            src="https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
          />
        </a>
      </nav>
      <Link to="/pokemon" className="poke-text">
        Pokedex
      </Link>
      <p className="stack-text">Full-Stack Project</p>
      <br></br>
      <br></br>
      <ul>
        <li className="inv-text">
          *See collection of pokemon by clicking Pokedex.{" "}
        </li>
        <li className="fav-text">
          *Create a collection of pokemon by clicking favorite.
        </li>
      </ul>
    </div>
  );
}
export default Home;
