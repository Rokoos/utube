import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    //make sure U call callback from parent component
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#52ab98",
        }}
        className="search-bar ui segment form"
      >
        <form
          onSubmit={this.onFormSubmit}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="field" style={{ width: "80%", margin: 0 }}>
            <input
              onChange={this.onInputChange}
              value={this.state.term}
              type="text"
              id="video"
            />
          </div>
          <button
            style={{ width: "20%", height: "38px", marginLeft: 5 }}
            // onClick={this.onFormSubmit}
            type="submit"
            className="fluid ui red animated button"
            tabIndex="0"
          >
            <div className="visible content">Go!</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </button>
        </form>
      </div>
    );
  }
}
