import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem";
import { clearCart,totals } from "../Utils/cartSlice";
import { useEffect } from "react";



const Cart=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    };
   
    useEffect(()=>{ dispatch(totals()); },[cartItems],dispatch);
    const {totalprice}=useSelector(store=>store.cart);

    return(
        
        <div>
                <div className="p-5">
                    <h1 className="inline font-medium py-5 px-5 text-4xl my-3 mx-14" >Cart Items</h1>
                    <button className="inline bg-blue-500 hover:bg-blue-700 text-white font-medium  py-1 px-5 border border-blue-200 rounded" onClick={()=>handleClearCart()}>Clear Cart</button>
                </div>
              <div className="p-5"> 
                <div className="flex my-10">   
                    <div className="w-4/5 shadow-md bg-gray-100 ml-5 mr-8">    
                        <div className="flex flex-wrap content-center">
                    {
                        cartItems.map((item)=>(
                            <FoodItem key={item.id} item={item}/>
                         )
                        )
                    }
                        </div>
                    </div>
                    <div className="w-1/5 border border-b-2  border-gray-400">   
                <div className="p-4"> 
                    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div class="flex justify-between mt-10 mb-5">
                        <span class="font-semibold px-4 text-sm uppercase">Sub Total</span>
                        <span class="font-semibold text-sm">₹{totalprice/100}</span>
                    </div>
                    <div class="flex justify-between mt-10 mb-5">
                        <span class="font-semibold px-4 text-sm uppercase">Standard delivery</span>
                        <span class="font-semibold text-sm">₹40</span>
                    </div>
                    <div class="py-5">
                        <label for="promo" class="font-semibold inline-block mb-3 px-4 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-40 border border-b-2" />
                    </div>
                    <button class="bg-red-500 hover:bg-red-600 px-5 ml-4 py-2 text-sm text-white uppercase">Apply</button>
                    <div class="border-t mt-8">
                        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                          <span>Total cost</span>
                          {totalprice!=0?<span>₹{(totalprice/100)+40}</span>:<span>-</span>}
                        </div>
                        <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Proceed to Buy</button>
                    </div>
                </div>
                    </div>
                </div> 
              </div> 
        </div>

    );
}

export default Cart;