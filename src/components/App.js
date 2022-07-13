import React, { Component } from "react";
import "./App.css";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import utube from "../api/utube";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit("Programming / Coding / Hacking music vol.16");
  }

  onTermSubmit = async term => {
    const response = await utube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
    console.log(video);
  };
  render() {
    console.log('videos', this.state.videos)
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="general">
          <div className="video">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div
            style={{
              height: "70vh",
              overflowX: "hidden",
              overflowY: "scroll"
            }}
          >
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
