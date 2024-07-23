import pokelogo from "../assets/pokelogo.png"

export default function HeaderComponent() {
  return (
    <div className=" flex justify-center">
      <img style={{objectFit:'cover', height:'250px'}} src={pokelogo} width={500}/>
    </div>
  );
}
