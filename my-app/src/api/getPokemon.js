import axios from "axios";

export default function getPokemon(limit,offset) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
}


