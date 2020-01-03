import React, { useState, useEffect } from "react";
import axios from "axios";
import { HeroItem } from "../interfaces/interfaces";

const MarvelContext = React.createContext({} as IContext);

const MarvelProvider = (props: any) => {
  const timestamp = "1";
  const publicKey = "efbb5198852f1e462c92d96098902a8a";
  const hash = "f679d3aebd0874f5f0e737460d1c729c";

  let url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  const [heroes, setHeroes] = React.useState<HeroItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchAllHeroes = () => {
    let marvelUrl = url;
    setLoading(true);
    setError(false);
    axios
      .get(marvelUrl)
      .then((res: any) => {
        let heroes: HeroItem[] = res.data.data.results;
        setHeroes(heroes);
        setLoading(false);
      })
      .catch((error: any) => {
        console.log(`Try again later. Error was: ${error}`);
        setError(true);
      });
  };

  const handleSubmit = (param: string) => {
    setLoading(true);
    setError(false);
    const searchUrl = param ? `${url}&name=${param}` : url;
    axios
      .get(searchUrl)
      .then((res: any) => {
        let heroes: HeroItem[] = res.data.data.results;
        setHeroes(heroes);
        setLoading(false);
      })
      .catch((error: any) => {
        console.log(`Try again later. Error was: ${error}`);
        setError(true);
      });
  };

  useEffect(() => {
    fetchAllHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MarvelContext.Provider
      value={{
        heroes,
        loading,
        handleSubmit,
        error
      }}
    >
      {props.children}
    </MarvelContext.Provider>
  );
};

interface IContext {
  heroes: HeroItem[];
  loading: boolean;
  handleSubmit: any;
  error: boolean;
}

export { MarvelProvider, MarvelContext };
