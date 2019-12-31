import { MarvelContext } from "../../context";
import React, { useContext } from "react";
import styles from "./Searchbar.module.scss";
import logo from "./marvelLogo.png";

export default function SearchBar() {
  const appContext = useContext(MarvelContext);

  const { handleSearchChange, handleSubmit } = appContext;

  return (
    <div className={styles.searchbar}>
      <div className={styles.logo}>
        <img alt="Marvel logo" src={logo} />
      </div>
      <div className={styles.searchBox}>
        <i className={`fa fa-search ${styles.searchIcon}`}></i>
        <input
          className={styles.searchField}
          type="search"
          placeholder="Buscar"
        />
      </div>
    </div>
  );
}
