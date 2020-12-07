import React from "react";

export default function VideoDetails({ video }) {
  return (
    <div className="video-details">
      <div className="video-window">
        <h1>Video plays here</h1>
      </div>
      <div className="video-description">
        <p>{video ? video.snippet.description : ""}</p>
      </div>
    </div>
  );
}
