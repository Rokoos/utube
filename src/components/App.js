import React, { Component } from "react";
import "./App.css";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import utube from "../api/utube";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit("Programming / Coding / Hacking music vol.16");
  }

  onTermSubmit = async (term) => {
    const response = await utube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <div className="rokus">
          <span>RokusTube</span>
        </div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="general" style={{ marginBottom: 30 }}>
          <div className="video">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div style={{ marginTop: 50 }}>
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}
