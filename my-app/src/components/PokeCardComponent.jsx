export default function PokeCardComponent({name, img}){
    return (
        <div>
            <a>{name}</a>
            <img src={img}/>
        </div>
    )
}