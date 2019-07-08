import React from "react";

const Search = props => {
  return (
    <div className="form-group">
      <label className="float-left">Pick-up Location</label>
      <input
        onChange={props.onInputChange}
        className="form-control"
        placeholder="city, airport, station, region and district..."
      />
      <ul className="list-group">
        {props.searchResults.slice(0, 6).map(result => (
          <li key={result.index} className="list-group-item">{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
