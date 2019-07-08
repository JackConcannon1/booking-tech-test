import React, { useState } from "react";
import Search from "./Search";
import { getSearchResults } from "../services/searchResults";

const Container = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = async event => {
    if (event.target.value.length > 1) {
      setSearchResults(await getSearchResults(event.target.value));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="search-container col-6 offset-3">
          <Search
            searchResults={searchResults}
            onInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
