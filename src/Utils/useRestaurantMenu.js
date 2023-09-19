import { useState,useEffect } from "react";


const useRestaurantMenu=(resId)=>{

    const [restaurant,setRestaurant] = useState(null);

    useEffect( ()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.31786537509314&lng=78.54553386569023&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

    return restaurant;
};

export default useRestaurantMenu;