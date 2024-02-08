import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/CartSlice";
const Cart =()=>{
   const cartItems=useSelector((store)=>store.cart.items)
   const dispatch = useDispatch();
   const handlerclearCart=()=>{
       dispatch(clearCart())
   }
   console.log("Cart Data");
   console.log(cartItems)
     return(
        <div className="text-center">
           <div className="w=9/12 mx-32 my-10 p-6 shadow shadow-black">
                <h2 className="text-center font-bold">Cart</h2>
                <div className="w-9/12 m-auto" >
                <button className="mt-2 px-2 rounded-sm border border-black bg-yellow-300" onClick={handlerclearCart}>Clear Cart</button>
                    {cartItems.length===0 ? <h2 className="p-4">Your Cart is Empty...Please  add Items to the Cart</h2>
                    : <ItemList resData={cartItems}/>}
                    
                </div>
                
           </div>
        </div>
     )
}

export default Cart;