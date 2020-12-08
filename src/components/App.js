import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

export default function App() {
  const [items, setItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setItems(response.data.items);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <div className="app">
        <h1 className="app-head">YouTube Search App</h1>
        <SearchBar onTermSubmit={onTermSubmit} />
        <VideoList onVideoSelect={onVideoSelect} videos={items} />
        <VideoDetails video={selectedVideo} />
      </div>
    </div>
  );
}
