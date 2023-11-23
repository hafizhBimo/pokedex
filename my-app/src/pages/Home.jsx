import { useEffect, useState } from "react";
import getPokemon from "../api/getPokemon";
import SearchBarComponent from "../components/SearchBarComponent";
import HeaderComponent from "../components/HeaderComponent";
import PokeListComponent from "../components/PokeListComponent";

function Home() {
  const [pokeList, setPokeList] = useState({});
  const pokeData = async () => {
    try {
      const response = await getPokemon();
      if (response.data) {
        setPokeList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pokeData();
  }, []);

  console.log(pokeList, "ini pokelist");
  return (
    <div>
      <HeaderComponent />
      <SearchBarComponent />
      <PokeListComponent data={pokeList}/>
    </div>
  );
}

export default Home;
