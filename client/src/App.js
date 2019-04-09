import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import MovieCard from './Movies/MovieCard'




import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import './index.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div className="app-wrapper">
        
        <Route exact path='/' component={MovieList} />
        <Route
          exact 
          path='/movies/:id'
          render={(props) => <Movie movie={this.state.savedList} addToSavedList={this.addToSavedList} {...props} />} />

        <SavedList list={this.state.savedList} />
        <div>Replace this Div with your Routes</div>
      </div>
    );
  }
}

