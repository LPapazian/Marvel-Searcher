import React, { useState, useEffect } from "react";
import axios from "axios";

const MarvelContext = React.createContext({} as IContext);

const MarvelProvider = (props: any) => {
  let url =
    "https://gateway.marvel.com/v1/public/characters?ts=1577481119617&apikey=e6871287b12aa63cc9058635a5a85069&hash=dbba76a4f4cf9fed1e4407baeeeb7f23";
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [hero, setHero] = useState([]);

  const fetchAllHeroes = () => {
    setLoading(false);

    // axios
    //   .get(url)
    //   .then((res: any) => {
    //     setHeroes(res.data.results);
    //     setLoading(false);
    //   })
    //   .catch((error: any) => {
    //     console.log("Try again later.");
    //   });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    setLoading(true);
    e.preventDefault();
    const searchUrl = `${url}&name=${search}`;
    axios
      .get(searchUrl)
      .then((res: any) => {
        setHero(res.data.results);
        setLoading(false);
      })
      .catch((error: any) => {
        console.log("Try again later.");
      });
  };

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchAllHeroes();
  }, []);

  return (
    <MarvelContext.Provider
      value={{
        heroes,
        loading,
        search,
        hero,
        handleSubmit,
        handleSearchChange
      }}
    >
      {props.children}
    </MarvelContext.Provider>
  );
};

interface IContext {
  heroes: any[];
  hero: any[];
  loading: boolean;
  search: string;
  handleSubmit: any;
  handleSearchChange: any;
}

export { MarvelProvider, MarvelContext };
