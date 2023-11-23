import PokeCardComponent from "./PokeCardComponent";

export default function PokeListComponent({ data }) {
  return (
    <div>
      {data.results?.map((item) => {
        return <PokeCardComponent name={item.name} img={item.url}/>
      })}
    </div>
  );
}
