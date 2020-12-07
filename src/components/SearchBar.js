import React, { useState } from "react";

export default function SearchBar({ onTermSubmit }) {
  const [term, setTerm] = useState("");
  return (
    <div className="ui segment search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTermSubmit(term);
        }}
        className="ui form"
      >
        <div className="ui field">
          <label htmlFor="term">Video Search</label>
          <input
            type="text"
            name="term"
            id="term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
