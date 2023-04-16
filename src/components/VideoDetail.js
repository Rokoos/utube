import React from "react";

export default function VideoDetail({ video }) {
  console.log("video", video);
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&loop=1/`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          allowFullScreen
          title="video-player"
        />
      </div>
      <div className="ui segment" style={{ backgroundColor: "#52ab98" }}>
        <h4 className="ui header" style={{ color: "#fff" }}>
          {video.snippet.title}
        </h4>
      </div>
      <hr style={{ height: 2, backgroundColor: "#f2f2f2" }} />
    </div>
  );
}
