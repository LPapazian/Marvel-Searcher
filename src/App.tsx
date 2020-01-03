import React, { useContext } from "react";
import { MarvelContext } from "./context";
import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";

function App() {
  const appContext = useContext(MarvelContext);
  const { loading, error } = appContext;

  return (
    <div>
      <SearchBar />
      {loading ? <Loader /> : error ? <ErrorPage /> : <HomePage />}
    </div>
  );
}

export default App;
