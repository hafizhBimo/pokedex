import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getPokemonDetail from "../api/getPokemonDetail";

export default function PokemonDetailPage (){
    const [detailData, setDetailData] = useState()
    const {id} = useParams()
    const pokeDetail = async () => {
        try {
          const response = await getPokemonDetail(id);
          if (response.data) {
            setDetailData(response.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(()=>{
        pokeDetail()
    },[])
    console.log(detailData,'<<<<<')
    return (
    <div style={{backgroundColor:'#FCCF00'}} className=" flex justify-center w-full">
        <div className="flex-col items-center w-3/6 bg-white">
            hehe
        </div>
    </div>)
}