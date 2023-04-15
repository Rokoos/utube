import React from "react";
import "./VideoItem.css";

export default function VideoItem({ video, onVideoSelect }) {
  const gotToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
        gotToTop();
      }}
      className="video-item item"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div style={{ marginLeft: 7 }}>{video.snippet.title}</div>
    </div>
  );
}
