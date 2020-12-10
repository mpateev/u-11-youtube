import React from "react";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="ui item video-item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="ui content">
        <div className="ui description">{video.snippet.title}</div>
        {/* <div className="ui description">{video.snippet.description}</div> */}
      </div>
    </div>
  );
}
