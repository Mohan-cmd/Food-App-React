import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DATA } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Card from "./Card";
import ShimmerCard from "./ShimmerCard";

const Restaurants =() =>{

    const {restaurantId}= useParams();
    //const [items,setitems] = useState([]);
     
    //console.log(restaurantId)

        // useEffect (()=>{
        //     getRestaurantData();
        // },[])
        
    // const getRestaurantData= async ()=>{
   
    // const data =await fetch (RESTAURANT_DATA+restaurantId)
    // console.log("req Res Data is: ")
    // const json= await data.json();
    // console.log(json)
    // //console.log(data.cards[2].cards
    const reqData=useRestaurantMenu(restaurantId)
       if(reqData===null) return <ShimmerCard/>
       console.log("req Data is: ");
       console.log(reqData)
     const itemsdata= reqData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
     console.log(itemsdata)
   // setitems(itemsdata);
   // console.log(items)
   //}

    return(
        <div>
        <div className="restaurants">
           {/* <h2>Name Of Restaurant</h2> */}
           <h3>Menu</h3>
           <ul>
             {itemsdata.map(item => <li> <Card ItemName={item.card.info.name} ItemCost= {item.card.info.price/100 || item.card.info.defaultPrice/100}
                ItemDescription={item.card.info.description} imageId={item.card.info.imageId} key={item.card.info.id}
             /> </li>)}
           </ul>
          
        
        </div>
        
        </div>
    )
    
}

export default Restaurants;