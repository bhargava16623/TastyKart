import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { addItem,totals } from "../Utils/cartSlice";
import { useDispatch,useSelector } from "react-redux";


const RestaurantMenu=()=>{
  
    const {resId}=useParams();
    const restaurant = useRestaurantMenu(resId);

    const cartItems=useSelector(store=>store.cart.items);
    const dispatch= useDispatch();

    useEffect(()=>{ dispatch(totals()); },[cartItems],dispatch);

    
    const addFoodItem=(item)=>{
        dispatch(addItem(item));
    }

    return (!restaurant)?<Shimmer/>:(
        <div className="flex flex-col items-center m-4">
           <div className=" border-dashed border-b-2  border-gray-400">
                <h1>Restuarant Id: {resId}</h1>
                <div className="flex flex-row ">
                    <h2 className="font-medium text-3xl ">{restaurant?.cards[0]?.card.card.info.name}</h2>
                    <h3 className="font-small text-xl p-2 mx-52">{restaurant.cards[0].card.card.info.avgRating}</h3>
                </div>
                <h3 className="font-small text-gray-400">{restaurant.cards[0].card.card.info.cuisines.join(", ")}</h3>
                <h3 className="font-small  text-gray-400 pb-3 ">{restaurant.cards[0].card.card.info.areaName}</h3>
              {/*<img className="h-80 w-80 pb-3" src={IMG_CDN_URL+restaurant.cards[0].card.card.info.cloudinaryImageId}/>   */}
           </div>
           <h3 className="p-4">{restaurant.cards[0].card.card.info.costForTwoMessage}</h3>
           <div className="flex flex-col  items-center">
               <h1 className="font-medium text-3xl p-3">Menu</h1>
               <ul data-testid="menu" className="m-4">
                 {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item)=>(
                  <>
                  <div key={item?.card?.info?.id+8}  className="flex flex-row border-solid border-2  border-gray-400 p-4 "> 
                         <div className="pb-4 " key={item?.card?.info?.id+5}> 
                            <img className="h-24 w-32 rounded " src={IMG_CDN_URL+item?.card?.info?.imageId}/>
                        </div> 
                        <div className="ml-24 ">
                            {item?.card?.info?.name} 
                            <li key={item?.card?.info?.id+1}>₹ {item?.card?.info?.price/100}</li> 
                            <li key={item?.card?.info?.id+2} className="font-small text-gray-400"> {(item?.card?.info?.description?.length)>30?(item?.card?.info?.description?.substring(0,80)+"..."):(item?.card?.info?.description)}</li> 
                            <li key={item?.card?.info?.id+3}><button data-testid="add" className="bg-slate-200 hover:bg-slate-400 text-green-900 font-medium  py-1 px-5 border rounded" onClick={()=>addFoodItem(item?.card?.info)}>+Add</button></li></div> 
                  </div> 
                  </>
                 ))}
               </ul>
           </div>
        </div>
       
    );

};

export default RestaurantMenu;
