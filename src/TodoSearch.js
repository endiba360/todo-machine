import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Search for a Task..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
