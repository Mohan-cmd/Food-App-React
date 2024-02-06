import React, { useState } from "react";
import ItemList from "./ItemList";
const ResCategory =(props)=>{
   const data= props.menuData
    //console.log("Res men Data")
    //console.log(props)
    const [showValue,getShowValue]=useState(false)
    const showCard=()=>{
      getShowValue(!showValue)
    }
   return(
    <div className="w-6/12 m-auto shadow-lg bg-gray-50">
      <div className="py-2 my-2 shadow-lg bg-gray-100 rounded-sm">
       <div className="flex justify-between cursor-pointer" onClick={()=>showCard()}>
        <span className="mx-2 text-base" >{data.title}</span>
        <span className="mx-3">{showValue ? "▴":"▾"}</span>
        </div>
        {showValue && <ItemList resData={data.itemCards}/>}
      </div>
    </div>
   )
   
    
}

export default ResCategory;