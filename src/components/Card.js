import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Card extends Component {
  state = { status: false, value: '' };
  onClick = id => {
    console.log('clicked');
    const url = 'https://www.themoviedb.org/movie/' + id;
    var win = window.open(url, '_blank');
    win.focus();
  };
  modal = () => {
    this.setState({
      status: !this.state.status
    });
  };
  pressedEnter = event => {
    if (event.key === 'Enter') {
      this.setState({
        text: this.state.value,
        status: false
      });
    }
    this.props.addNotes(this.state.text);
  };
  onChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { title, overview, id } = this.props;
    const image = 'https://image.tmdb.org/t/p/w185/' + this.props.poster_path;
    return (
      <div className="card" width="50">
        <img src={image} alt="Avatar" width="120" />
        <div>
          <h4>
            <b>{title}</b>
          </h4>
          {this.state.status ? (
            <div className="search">
              <input
                placeholder="Add notes"
                value={this.state.value}
                onChange={this.onChange}
                onKeyDown={this.pressedEnter}
              />
            </div>
          ) : null}
          <p>{overview}</p>
          <button className="btn success" onClick={() => this.onClick(id)}>
            View More
          </button>
          <button className="btn success" onClick={this.modal}>
            AddNote
          </button>
          {this.state.text ? (
            <div>
              User Note ***
              {this.state.text} ***
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Card);
