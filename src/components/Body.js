import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Restaurentlist } from "../config";
import useOnline from "../Utils/useOnline";
import Restaurantcard from "./RestaurantCard";
import Shimmer from "./Shimmer"; 


function filterData(searchInput, restaurants)
{
    return restaurants.filter((restaurant)=> restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase()));
}

const Body=()=>{
  
  const [allRestaurants,setAllRestaurants]= useState("")
  const [filteredRestaurants,setFilteredRestaurants] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const isOnline= useOnline();

    useEffect(()=>{
      getRestaurants();
    },[]);
  
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=17.425938120298223&lng=78.39342287825744");
        const json = await data.json();
        setAllRestaurants(json?.data?.success.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.success.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    }
  
    if(!isOnline)
     return <h1>Offline, Please check your internet connection!</h1>;
  
   return(
       <>
        
        <h1 className="font-medium py-5 px-5 text-4xl my-3 mx-32">Restaurents with online delivery</h1>
        <div className="py-3 px-8 mx-32">
          <input  
            type="text" 
            data-testid="search-input"
            className="search-input border border-b-2 border-black-500 rounded-lg  " 
            placeholder="  search" 
            value={searchInput}
            onChange={(e)=>{
              setSearchInput(e.target.value);
            }}
            />
          <button role="search-btn" className="bg-blue-500 hover:bg-blue-700 text-white font-medium mx-2 py-1 px-5 border border-blue-200 rounded" onClick={
            ()=>{
              const data= filterData(searchInput,allRestaurants);
              setFilteredRestaurants(data);
            }
          }
          >Search</button>
        </div>
        <div className="ms-28 ">
        <div data-testid="reslist"  className="flex flex-wrap content-center">
             {
               (filteredRestaurants.length===0 && searchInput.length==0)? <Shimmer/> :(
                  (searchInput.length!=0 && filteredRestaurants.length===0)? <h1>No Restaurants with the given input</h1> :
                   ( filteredRestaurants.map(restaurant =>
                  {
                    
                     return( <Link  to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} >
                                <Restaurantcard  {...restaurant.info} />
                            </Link>
                     )
                  } 
                 ) 
               )
                )
             } 
        </div></div>
       </>
    );
 }; 

 export default Body;