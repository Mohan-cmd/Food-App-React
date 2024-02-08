import React, { useState } from "react";
import ItemList from "./ItemList";
const ResCategory =({menuData,showValue,settShowValue,setShowIndex})=>{
  
    //console.log("Res men Data")
    //console.log(props)
    
    const showCard=()=>{
     // setNewShowValue(!newshowValue)
     settShowValue(!showValue)
      setShowIndex()
    }
   return(
    <div className="w-6/12 m-auto shadow-lg bg-gray-50">
      <div className="py-2 my-2 shadow-lg bg-gray-100 rounded-sm">
       <div className="flex justify-between cursor-pointer" onClick={()=>showCard()}>
        <span className="mx-2 text-base" >{menuData.title}</span>
        <span className="mx-3">{showValue ? "▴":"▾"}</span>
        </div>
        {showValue && <ItemList key={menuData.title} resData={menuData.itemCards}/>}
      </div>
    </div>
   )
   
    
}

export default ResCategory;