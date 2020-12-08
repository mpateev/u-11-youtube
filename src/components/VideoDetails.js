import React from "react";

export default function VideoDetails({ video }) {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  if (!video) return <div className=""></div>;

  return (
    <div className="video-details ui segment">
      <div className="ui embed video-window">
        <iframe title={video.snippet.title} src={videoSrc} frameborder="0" />
        <div className="video-description ui header">
          <p>{video ? video.snippet.title : ""}</p>
        </div>
        <div className="video-description ui text">
          <p>{video ? video.snippet.description : ""}</p>
        </div>
      </div>
    </div>
  );
}
