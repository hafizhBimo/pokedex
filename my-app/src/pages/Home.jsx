import { useEffect, useState } from "react";
import getPokemon from "../api/getPokemon";
// import SearchBarComponent from "../components/SearchBarComponent";
import HeaderComponent from "../components/HeaderComponent";
import PokeListComponent from "../components/PokeListComponent";
import Pagination from "../components/Pagination";

function Home() {
  const [pokeList, setPokeList] = useState({});
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const pokeData = async () => {
    try {
      const response = await getPokemon(limit,offset);
      if (response.data) {
        setPokeList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pokeData();
  }, [offset]);

  return (
    <div style={{backgroundColor:'#FCCF00'}} className=" flex justify-center w-full">
      <div className="flex-col items-center w-4/6 bg-white">
      <HeaderComponent />
      {/* <SearchBarComponent /> */}
      <PokeListComponent data={pokeList}/>
      <Pagination count={pokeData?.count} next={pokeData?.next} previous={pokeData?.previous} setOffset={setOffset} offset={offset} limit={limit}/>
      </div>
    </div>
  );
}

export default Home;
