import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem";
import { clearCart } from "../Utils/cartSlice";


const Cart=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    };

    return(
        
        <div>
            <h1>Cart Items</h1>
            <button onClick={()=>handleClearCart()}>Clear Cart</button>
            <div className="flex flex-wrap content-center">
                {
                    cartItems.map((item)=>(
                        <FoodItem key={item.id} {...item}/>
                     )
                    )
                }
            </div>
        </div>

    );
}

export default Cart;