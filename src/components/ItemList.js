 import { addItem } from "../utils/CartSlice";
import { IMAGE_LINK_CLODINARY } from "../utils/constants";
 import {useDispatch} from "react-redux";
const ItemList=(props)=>{
    const data=props.resData;
    const dispatch= useDispatch();
    const handleAddItem= (req)=>{
      //Dispatch an action
      dispatch(addItem(req))
    }
   return(
    <div>
      {data.map((req)=>
      <div className="m-2 shadow-md shadow-gray-200 text-left w=9/12" key={req?.card?.info?.id}>
      <div className="flex justify-between">
        <div>
            <div className="m-2 text-sm font-bold">
               {req?.card?.info?.name}
            </div>
            <p className="text-left">
               <span className="m-2 font-thin text-xs">{req?.card?.info?.category}</span>
               <span className="m-2 py-2 text-sm">₹{req?.card?.info?.price/100 || req?.card?.info?.defaultPrice/100}</span>
             </p> 
            
        </div>
          <div className="w=3/12">
            <div className="absolute">
             <button className="border border-black bg-white text-sm ml-12 px-2 py-1 mt-20 rounded-sm text-yellow-500" 
              onClick={()=>handleAddItem(req)}>Add</button>
            </div>
           <img className="m-2 w-[120px] h-[100px]" src={IMAGE_LINK_CLODINARY+req?.card?.info?.imageId}></img>
          </div> 
       </div>  
      </div>)}
    </div>
   )
   
}


export default ItemList;