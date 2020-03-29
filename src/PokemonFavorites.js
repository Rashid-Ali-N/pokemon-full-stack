import React, { useState, useEffect } from "react";
import "./PokeCardCss.css";
import "./PokeFav.css";
import PokeCard from "./PokeCard.js";
import PokePick from "./PokePick.js";
import PokeMon from "./PokeMon.js";
import { withRouter } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";

function PokemonFavorites(props) {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/favorite").then(response => {
      setPokes(response.data);

      console.log("resssspons", response.data);
    });
  }, []);

  function deleteFavorites(favoritesId) {
    axios.delete(`/favorite/${favoritesId}`).then(response => {
      setPokes(prevPokes => prevPokes.filter(poke => poke._id !== favoritesId));
    });
    console.log("fav", favoritesId);
  }
  // console.log("fav", favoritesId);

  console.log("pokessssssssss", pokes);
  const mapToDo = pokes.map(poke => {
    console.log("pokeID", poke.id);
    return (
      <div>
        <Link className="pokename" to={`/pokemon/${poke.name}`}>
          <h1 className="pokename-fav">{poke.name}</h1>
        </Link>
        <button className="del-btn" onClick={() => deleteFavorites(poke._id)}>
          delete
        </button>

        <div class="fav-border-wid"></div>
      </div>
    );
  });

  return (
    <div className="fav-body">
      <nav className="navigation">
        <a href="/">
          <img
            class="logo"
            src="https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
          />
        </a>
      </nav>
      {mapToDo}
    </div>
  );
}
export default PokemonFavorites;
