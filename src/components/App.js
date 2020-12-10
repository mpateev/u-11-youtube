import React, { useEffect, useState } from "react";
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
    setSelectedVideo(response.data.items[0]);
    setItems(response.data.items.slice(1));
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    onTermSubmit("doberman");
  }, []);
  return (
    <div className="ui container">
      {/* <h1 className="">YouTube Search App</h1> */}
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="twelve wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="four wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={items} />
          </div>
        </div>
      </div>
    </div>
  );
}
