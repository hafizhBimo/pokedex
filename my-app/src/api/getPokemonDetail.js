import axios from "axios";

export default function getPokemonDetail(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}


