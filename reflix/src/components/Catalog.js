import React, { Component } from "react";
import Movie from "./Movie";
// import { Link } from "react-router-dom";

class Catalog extends Component {

  render() {
    // let movieName = this.props.match.params.name;
    let movies = this.props.state.movies
    return (
      <div className="catalog">
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <span className="budget">Budget: {this.props.state.budget} $</span>
        </div>
        <div className="movies">
        {movies.some(movie=> movie.isRented) ?
        <div>
          <h2>Rented: </h2>
        <div className="movies-container">
          {movies.filter(movie => movie.isRented).map(movie => <Movie movie={movie} isRented={this.props.isRented} />)} 
          </div>
        </div>: ""
      }
         
        
        <h2>Catalog:</h2>
        <div className="movies-container">
    {movies.map( movie => <Movie movie={movie} isRented={this.props.isRented} />)}
        </div>
        
        </div>
      </div>
    );
  }
}

export default Catalog;
