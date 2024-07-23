import axios from "axios"
import { useEffect, useState } from "react";
import pokedexNumberFormatter from "../utils/pokedexNumberFormatter";

export default function PokeCardComponent({name, url}){
    const [pokeDetail, setPokeDetail] = useState()
    const pokeDataDetail = async () => {
        try {
          const response = await axios.get(url);
          if (response.data) {
            setPokeDetail(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(()=>{
        pokeDataDetail()
    },[name])
    return (
        <div style={{height:'100%', maxHeight:'180px'}} className=" flex flex-col">
            <img width={150} src={pokeDetail?.sprites?.front_default}/>
            <a style={{fontSize:16}} className=" text-center font-bold">{name}</a>
            <a style={{color:'#2468B1'}} className=" text-center font-semibold">{pokeDetail && pokedexNumberFormatter(pokeDetail?.id)}</a>
        </div>
    )
}