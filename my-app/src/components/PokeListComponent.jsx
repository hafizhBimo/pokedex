import PokeCardComponent from "./PokeCardComponent";

export default function PokeListComponent({ data }) {
  return (
    <div className=" grid grid-cols-4 gap-4 justify-items-center">
      {data.results?.map((item) => {
        return <PokeCardComponent name={item?.name} url={item?.url}/>
      })}
    </div>
  );
}
