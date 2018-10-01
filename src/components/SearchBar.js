import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class SearchBar extends Component {
  state = { value: '' };
  onChange = event => {
    this.setState({ value: event.target.value });
  };
  pressedEnter = event => {
    if (event.key === 'Enter') {
      this.props.getMovies(this.state.value);
      this.setState({
        value: ''
      });
    }
  };
  onClick = () => {
    this.props.getMovies(this.state.value);
  };
  render() {
    return (
      <div className="search">
        <input
          placeholder="Enter Movie Name"
          onChange={this.onChange}
          value={this.state.value}
          onKeyDown={this.pressedEnter}
        />
        <button onClick={this.onClick}>Enter</button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(SearchBar);
