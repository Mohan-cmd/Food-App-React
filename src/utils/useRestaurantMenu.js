import { useEffect, useState } from "react";
import { RESTAURANT_DATA } from "./constants";
import React from "react";
import { ReactDOM } from "react";

const useRestaurantMenu =(restaurantId) => { 
    const[restInfo,setRestInfo] = useState(null)

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(RESTAURANT_DATA + restaurantId)
        console.log("initial data is: ")
        console.log(data)
        const json = await data.json();
        
        console.log("data is: ")
        console.log(json)
        setRestInfo(json)
    }
    return restInfo;
}


export default useRestaurantMenu;