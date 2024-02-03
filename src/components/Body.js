import React, { useEffect, useState } from "react"
import  ReactDOM  from "react-dom/client"
import Cardcomponent from "./Cardcomponent"
import { DATA_ARRAY_OBJECT } from "../utils/mockData"
import ShimmerCard from "./ShimmerCard"
import { Link } from "react-router-dom"

const Body=()=>{
   // const [listOfResstaurents,setlistOfRestaurents]=useState(DATA_ARRAY_OBJECT)
   const [listOfResstaurents,setlistOfRestaurents]=useState([])
   const [filteredRestaurants,setfilteredRestaurants]=useState([])
    const[searchValue,setsearchValue]=useState("")
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const Data= await fetch(
            "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.406498%26lng%3D78.47724389999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
        );
        const json = await Data.json();
        console.log("swiigy api")
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       //console.log(json.data)
        reqList=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //console.log(reqList)
       setlistOfRestaurents(reqList)
       setfilteredRestaurants(reqList)
       console.log("list data is")
       console.log(listOfResstaurents)
    }

//     //Conditional Rendering is nothing but rendering based on some condition
//    if(listOfResstaurents.length===0){
//     // return <h1>Loading...</h1>
//     return <ShimmerCard/>
//    }
//console.log("search vaue: "+searchValue)



    return listOfResstaurents.length===0 ? <ShimmerCard /> : (
        <div className="bodycontainer">
        <div className="filter">
          <input style={{padding:"3px 0px",width:"140px",margin:"8px 1px 8px 6px",border:"1px solid black",borderRadius:"2px"}} value={searchValue} onChange={((e)=>
            setsearchValue(e.target.value)
          )}></input>
        <button style={{width:"60px",backgroundColor:"lightsalmon", padding:"3px 0px",borderRadius:"2px",margin:"0px 0px",border:"1px solid black"}}onClick={()=>{
           const filtVal=listOfResstaurents.filter((obj)=>(obj.info.name.toLowerCase().includes(searchValue.toLowerCase())));
           setfilteredRestaurants(filtVal)}}>Search</button>
        
        <button className="filter-btn" onClick={()=>{
               const filteredList=listOfResstaurents.filter((reqdata)=>reqdata.info.avgRating>4.2);
               setfilteredRestaurants(filteredList)
              
            }}>Top Rated Restaurents</button>
        </div>
            <div className="cardcontainer">
            {filteredRestaurants.map((restaurent)=>(
                <Link to={"/restaurants/"+restaurent.info.id} key={restaurent.info.id}>
                <Cardcomponent resData={restaurent}/>
                </Link>))
            }</div>
            {/* if no unique keys are present then use index
            {dataArrayObj.map((restaurent,index)=>(
                <Cardcomponent resData={restaurent} key={index}/>))
            }</div> */}
        </div>
    )
}

export default Body;