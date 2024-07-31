import { useState } from "react";

export default function Pagination ({count, next, previous, setOffset, offset, limit}){
    const maxPage = Math.ceil(count / 20);
    const onClick = (type)=>{
        switch(type){
            case 'next':return setOffset(offset+20)
            case 'previous':return  setOffset(offset-20) 
            case `${type}`: return setOffset((type-1)*limit)
            default: return
        }
        
    }
    return(
<div class="flex justify-between">
  <button disabled={offset==0} onClick={()=>onClick('previous')} className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-black rounded-md hover:scale-105 hover:shadow-xl hover:border-2 border-black">
    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
    </svg>
    Previous
  </button>
  <button disabled={offset==(maxPage*20)} onClick={()=>onClick('next')} className="flex items-center justify-center px-4 h-10 text-base font-medium text-black rounded-md hover:scale-105 hover:shadow-xl hover:border-2 border-black" >
    Next
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
  </button>
</div>
    )
}