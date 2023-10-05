import { IMG_CDN_URL } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf,faDrumstickBite,faCheck,faXmark} from "@fortawesome/free-solid-svg-icons";

const FoodItem=({name,price,itemAttribute,imageId,inStock})=>{
    
  console.log(itemAttribute.vegClassifier);
    return (
      <>
      {/*<>
       <div className="w-80 mx-10 my-5 border border-gray-100 shadow-lg">
          <img src={IMG_CDN_URL+imageId} className="object-cover h-80 w-80"/>
           {
            (name.length<25)?<h2 className="font-medium text-xl p-2 ">{name}</h2>:<h2 className="font-medium text-xl p-2">{name.substring(0,24)+"..."}</h2>
           }
          <h3 className="font-medium text-xl p-2">₹{price/100}</h3> 
          <h4 className=" p-2">{(itemAttribute.vegClassifier!="NONVEG")?<FontAwesomeIcon icon={faLeaf} style={{color: "#26a269",}} />:<FontAwesomeIcon icon={faDrumstickBite} style={{color: "#e01b24",}} />}</h4>
          <h4 className=" p-2">{(inStock)?<FontAwesomeIcon icon={faCheck} />:<FontAwesomeIcon icon={faXmark} />}</h4>
          <button className="bg-slate-200 hover:bg-slate-400 text-green-900 font-medium  py-1 px-5 border rounded" >+</button>
          
       </div>
          </>*/}

        <div className="w-80 mx-10 my-5 border border-gray-100 shadow-lg">
            <img src={IMG_CDN_URL+imageId} className="object-cover h-80 w-80"/>
            {
              (name.length<25)?<h2 className="font-medium text-xl p-2 ">{name}</h2>:<h2 className="font-medium text-xl p-2">{name.substring(0,24)+"..."}</h2>
            }
            <h3 className="font-medium text-xl p-2">₹{price/100}</h3> 
            <h4 className=" p-2">{(itemAttribute.vegClassifier!="NONVEG")?<FontAwesomeIcon icon={faLeaf} style={{color: "#26a269",}} />:<FontAwesomeIcon icon={faDrumstickBite} style={{color: "#e01b24",}} />}</h4>
            <h4 className=" p-2">{(inStock)?<FontAwesomeIcon icon={faCheck} />:<FontAwesomeIcon icon={faXmark} />}</h4>
            <button className="bg-slate-200 hover:bg-slate-400 text-green-900 font-medium  py-1 px-5 border rounded" >+</button>
          
       </div>
        </>

       
     );
  }

export default FoodItem;