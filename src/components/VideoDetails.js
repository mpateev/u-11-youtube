import React from "react";

export default function VideoDetails({ video }) {
  if (!video) return <div className=""></div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title={video.snippet.title} src={videoSrc} frameborder="0" />
        <div className="video-description ui header">
          <p>{video ? video.snippet.title : ""}</p>
        </div>
        <div className="ui text">
          <p>{video ? video.snippet.description : ""}</p>
        </div>
      </div>
    </div>
  );
}
