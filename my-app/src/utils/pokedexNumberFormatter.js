export default function pokedexNumberFormatter(id){
    const toString = id.toLocaleString().split('')
    if(toString.length == 1){
        return `00${id}`
    } else if(toString.length == 2){
        return `0${id}`
    } else return id
}