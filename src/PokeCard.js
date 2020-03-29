import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeMon from "./PokeMon.js";
import { withRouter } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";
import { withPoke } from "./PokeProvider";
import "./PokeCardCss.css";

function PokeCard(props) {
  const [pokes, setPokes] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [filteredPokes, setFilteredPokes] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=964").then(response => {
      setPokes(response.data.results);
      setFilteredPokes(response.data.results);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);

      // console.log(response.data);
    });
  }, []);

  const handleInput = e => {
    const { value } = e.target;
    const filteredList = pokes.filter(poke => {
      // return poke.name.toLowerCase().test(new RegExp(value.toLowerCase()));
      return new RegExp(value.toLowerCase()).test(
        poke.name.toLowerCase().slice(0, value.length)
      );
    });
    setFilteredPokes(filteredList);
  };

  // const next = () => {
  //   axios.get(nextUrl).then(response => {
  //     setPokes(response.data.results);
  //     setFilteredPokes(response.data.results);
  //     setNextUrl(response.data.next);
  //     setPrevUrl(response.data.previous);
  //     console.log("next", response.data.next, response.data.previous);
  //   });
  // };

  // console.log("prev", response.data.previous);

  // const prev = () => {
  //   axios.get(prevUrl).then(response => {
  //     setPokes(response.data.results);
  //     setFilteredPokes(response.data.results);
  //     setPrevUrl(response.data.previous);
  //     setNextUrl(response.data.next);
  //     console.log("prev", response.data.previous);
  //   });
  // };

  console.log("pokes", pokes);
  const mapToDo = filteredPokes.map(poke => {
    return (
      <Link className="pokename" to={`/pokemon/${poke.name}`}>
        <div>
          <h1 className="pokename">{poke.name}</h1>
        </div>
        <div class="border-wid"></div>
      </Link>
    );
  });

  return (
    <div className="body">
      <nav className="navigation">
        <a href="/">
          <img
            class="logo"
            src="https://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
          />
        </a>
      </nav>
      <input
        placeholder="Search..."
        className="search"
        onChange={handleInput}
      />
      <div class="border-wid-2"></div>
      {mapToDo}
      <div>
        <div className="color"></div>
      </div>
    </div>
  );
}

export default withRouter(PokeCard);
