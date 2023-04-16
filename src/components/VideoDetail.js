import React from "react";

export default function VideoDetail({ video }) {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?}&loop=1&autoplay=1&rel=0/`;
  return (
    <div style={{ borderBottom: "2px solid #db2828", paddingBottom: 10 }}>
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          allowFullScreen
          title="video-player"
        />
      </div>
      <div
        className="ui segment"
        style={{
          backgroundColor: "#444",
        }}
      >
        <h4 className="ui header" style={{ color: "#fff" }}>
          {video.snippet.title}
        </h4>
      </div>
    </div>
  );
}
