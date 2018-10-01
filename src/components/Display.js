import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

import * as actions from '../actions';
class Display extends Component {
  componentDidMount() {
    this.props.getMovies('batman');
    console.log(this.props);
  }

  displayMovies = () => {
    return this.props.movies.map(movie => {
      return (
        <Card
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          overview={movie.overview}
        />
      );
    });
  };
  render() {
    console.log(this.props.movies);
    if (!this.props.movies) {
      return <div>Just a second !! </div>;
    }
    return <div>{this.displayMovies()}</div>;
  }
}
function mapStateToProps(state) {
  return { movies: state.movies };
}
export default connect(
  mapStateToProps,
  actions
)(Display);
