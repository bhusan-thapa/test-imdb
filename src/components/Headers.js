import React, { Component } from 'react';
import SearchBar from './SearchBar';
export default class Header extends Component {
  render() {
    return (
      <div className="topnav">
        <div className="active">Home</div>
        <SearchBar />
      </div>
    );
  }
}
