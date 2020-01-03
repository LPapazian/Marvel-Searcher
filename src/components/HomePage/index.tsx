import React, { useContext, Fragment } from "react";
import { MarvelContext } from "../../context";
import styles from "./Homepage.module.scss";
import HeroCard from "../HeroCard";

export default function HomePage() {
  const appContext = useContext(MarvelContext);
  const { heroes } = appContext;

  return (
    <Fragment>
      {heroes.length > 0 ? (
        <div className={styles.gridContainer}>
          {heroes.map((hero, index) => (
            <HeroCard hero={hero} key={index} />
          ))}
        </div>
      ) : (
        <div className={styles.errorPage}>
          No results were found for this search
        </div>
      )}
    </Fragment>
  );
}
