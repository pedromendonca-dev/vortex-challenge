import React, { useState } from "react";
import './searchbar.css'

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const [searchMode, setSearchMode] = useState("nome");

  const handleSearch = () => {
    onSearch(term, searchMode);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={`Buscar por ${searchMode === "nome" ? "nome" : "cargo"}...`}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <select value={searchMode} onChange={(e) => setSearchMode(e.target.value)} className="select-container">
        <option value="nome">Nome</option>
        <option value="cargo">Cargo</option>
      </select>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
