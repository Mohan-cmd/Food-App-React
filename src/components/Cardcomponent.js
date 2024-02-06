import React from "react"
import {IMAGE_LINK_CLODINARY} from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cardcomponent=(props)=>{
    const {resData} =props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,delTime}=resData?.info    
    return <div className="w-[200px] h-[400px] border border-grey text-clip overflow-hidden p-1 m-3 hover:bg-[#ffa07a] shadow-sm">
                <div className="text-center">
                <img className="max-w-[100%] aspect-square" src={IMAGE_LINK_CLODINARY+cloudinaryImageId}></img>
                    <h4 className="font-bold m-1">{name}</h4>
                    <h5 className="text-sm">{cuisines.join(", ")}</h5>
                    <div >{avgRating}</div>
                    <div>{costForTwo}</div>
                    <div>{delTime} minutes</div>
                </div>
            </div>
}


// Higher Order component
// which takes function as argument and returns another function here we can say compoentna as compoent is a fnction

// input ResturentCard => RestaurantCardPromoted

export const withPromotedLabel = (InpRestaurant)=>{

    return (props)=>{
      return(
        <div>
       
          <div className="absolute ml-2.5 mt-3 p-2 rounded-md text-sm bg-yellow-500 shadow-lg shadow-slate-950 font-bold">{props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader || props?.resData?.info?.aggregatedDiscountInfoV3?.discountTag} - {props.resData.info.aggregatedDiscountInfoV3.header}</div>
          {<InpRestaurant {...props}/>}
        </div>
      )
    }
  }
  
export default Cardcomponent;