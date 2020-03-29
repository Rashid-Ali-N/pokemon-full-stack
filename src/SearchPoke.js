import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokeMonCss.css";

class SearchPoke extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      initialItems: []
    };
  }

  filterList = event => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      return (
        // item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
        item.name.toLowerCase().test(new RegExp(event.target.value.toLowerCase))
      );
    });
    this.setState({ favorites: items });
  };

  componentDidMount = () => {
    this.setState({
      initialItems: this.props.content,
      favorites: this.props.content
    });
  };
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.filterList} />
        </form>
        <div>
          {this.state.favorites.map(function(item) {
            return <div key={item.name}>{item.name}</div>;
          })}
        </div>
      </div>
    );
  }
}
export default PokeMon;
