import React, { useContext } from "react";
import "./App.scss";
import { MarvelContext } from "./context";
import SearchBar from "./components/SearchBar";

function App() {
  const appContext = useContext(MarvelContext);

  const { loading, search } = appContext;
  return (
    <div className="App">
      <SearchBar />
      {loading ? (
        <h1 className="text-center">...fetching {search} recipe</h1>
      ) : (
        <h1> Listop </h1>
      )}
    </div>
  );
}

export default App;
