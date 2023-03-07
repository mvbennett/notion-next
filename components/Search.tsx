import React from "react";
import { useState } from "react";

const Search = ({search, setResults}: any) => {
  const [input, setInput] = useState(String);
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setResults([]);
    const searchResults = await search(input);
    const parsedResults: any = [];
    searchResults.forEach((result: any) => {
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
