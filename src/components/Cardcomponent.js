import React from "react"
import {IMAGE_LINK_CLODINARY} from "../utils/constants"
const Cardcomponent=(props)=>{
    const {resData} =props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,delTime}=resData?.info    
    return <div className="card">
                <div style={{textAlign:"center"}}>
                <img className="cardImage" src={IMAGE_LINK_CLODINARY+cloudinaryImageId}></img>
                    <h4>{name}</h4>
                    <h5>{cuisines.join(", ")}</h5>
                    <div >{avgRating}</div>
                    <div>{costForTwo}</div>
                    <div>{delTime} minutes</div>
                </div>
            </div>
}

export default Cardcomponent;