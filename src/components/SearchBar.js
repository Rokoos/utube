import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    //make sure U call callback from parent component
    this.props.onFormSubmit(this.state.term);
    this.setState({term: ''})
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video">Video Search</label>
            <input
              onChange={this.onInputChange}
                value={this.state.term}
              type="text"
              id="video"
            />
          </div>
        </form>
      </div>
    );
  }
}
