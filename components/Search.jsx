import React from "react";
import { useState } from "react";

const Search = ({search, setResults}) => {
  const [input, setInput] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResults([]);
    const searchResults = await search(input);
    const parsedResults = [];
    searchResults.forEach((result) => {
      if (result.authors !== undefined && result.description !== undefined) {
        parsedResults.push(result);
      }
    });
    setResults(parsedResults);
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input className="search" type="text" onChange={e => setInput(e.target.value)} placeholder="Type a book title or author name here" />
        <input className="search-btn" type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
