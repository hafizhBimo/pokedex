import PokeTypeComponent from "./PokeTypeComponent"

export default function PokeTypeList({dataTypeList}){
    return (
        <div className=" flex gap-2">
            {
                dataTypeList?.map((data)=>{
                    return (
                        <PokeTypeComponent type={data?.type?.name}/>
                    )
                })
            }
        </div>
    )

}