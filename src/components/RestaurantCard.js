import { IMG_CDN_URL } from "../config";

const Restaurantcard=({name,avgRating,cloudinaryImageId,cuisines,areaName})=>{
   
    return (
      <>
       <div className="w-80 mx-10 my-5 border border-gray-100 shadow-lg">
          <img src={IMG_CDN_URL
          +cloudinaryImageId} className="object-cover h-80 w-80"/>
           {
            (name.length<25)?<h2 className="font-medium text-xl p-2 ">{name}</h2>:<h2 className="font-medium text-xl p-2">{name.substring(0,24)+"..."}</h2>
           }
          <h3 className="font-medium text-xl p-2">{avgRating}</h3>
          {
            (cuisines.length<3)?<h4 className="font-medium text-xl p-2">{cuisines.join(", ")}</h4>:<h4 className="font-medium text-xl p-2">{cuisines.join(", ").substring(0,25)+"..."}</h4>
           }
          <h4 className="font-medium text-xl p-2">{areaName}</h4>
       </div>
       </>
     );
  }

export default Restaurantcard;