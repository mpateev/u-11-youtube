import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import youtube from "../api/youtube";

export default function App() {
  const [items, setItems] = useState([]);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setItems(response.data.items);
  };

  return (
    <div className="ui container">
      <div className="app">
        <h1 className="ui app-head">YouTube Search App</h1>
        <SearchBar onTermSubmit={onTermSubmit} />
        <VideoDetails video={items[0]} />
        <VideoList videos={items} />
      </div>
    </div>
  );
}
