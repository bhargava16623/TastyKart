import { IMG_CDN_URL } from "../config";
import { useDispatch, useSelector } from "react-redux"
import { removeItem,decreaseItemQ,addItem,totals } from "../Utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf,faDrumstickBite,faCheck,faXmark} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const FoodItem=(item)=>{

  const {name,price,itemAttribute,imageId,inStock,quantity,amount}=item.item;
  const cartItems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();
    const handleremoveitem=(item)=>{
        dispatch(removeItem(item));
    };
    const handledecreaseq=(item)=>{
      dispatch(decreaseItemQ(item));
    };
    const addFoodItem=(item)=>{
      dispatch(addItem(item));
    }

    useEffect(()=>{ dispatch(totals()); },[cartItems,dispatch]);

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

        {/*<div className="w-80 mx-10 my-5 border border-gray-100 shadow-lg">
            <img src={IMG_CDN_URL+imageId} className="object-cover h-80 w-80"/>
            {
              (name.length<25)?<h2 className="font-medium text-xl p-2 ">{name}</h2>:<h2 className="font-medium text-xl p-2">{name.substring(0,24)+"..."}</h2>
            }
            <h3 className="font-medium text-xl p-2">₹{price/100}</h3> 
            <h4 className=" p-2">{(itemAttribute.vegClassifier!="NONVEG")?<FontAwesomeIcon icon={faLeaf} style={{color: "#26a269",}} />:<FontAwesomeIcon icon={faDrumstickBite} style={{color: "#e01b24",}} />}</h4>
            <h4 className=" p-2">{(inStock)?<FontAwesomeIcon icon={faCheck} />:<FontAwesomeIcon icon={faXmark} />}</h4>
            <button className="bg-slate-200 hover:bg-slate-400 text-green-900 font-medium  py-1 px-5 border rounded" >+</button>
          
          </div>*/}
       <div className="flex w-96 h-60 mx-10 my-5 border p-2 border-gray-100 shadow-lg">
         <div className="p-4 ">
            <img src={IMG_CDN_URL+imageId} className="object-cover h-40 w-40"/>
            <button className="bg-slate-200 hover:bg-slate-400 text-red-600 font-medium m-3  py-1 px-5 border rounded" onClick={()=>handleremoveitem(item.item)}>Remove</button>
          </div>
          <div className="w-60">
            
            {
              (name.length<18)?<h2 className="font-medium text-xl py-3">{name}</h2>:<h2 className="font-medium text-xl py-3 px-1">{name.substring(0,16)+"..."}</h2>
            }
            
            <h3 className="font-medium text-xl p-2">₹{amount}</h3> 
            <div className="flex">
            <h4 className=" p-2">{(itemAttribute.vegClassifier!="NONVEG")?<FontAwesomeIcon icon={faLeaf} style={{color: "#26a269",}} />:<FontAwesomeIcon icon={faDrumstickBite} style={{color: "#e01b24",}} />}</h4>
            <h4 className=" p-2">{(inStock)?<h4 className="text-green-900"><FontAwesomeIcon icon={faCheck} /> In stock</h4>:<FontAwesomeIcon icon={faXmark} />}</h4>
            </div>
            <div className="flex">
            <button className="bg-slate-200 hover:bg-slate-400 text-green-900 text-xl  px-2 border rounded" onClick={()=>addFoodItem(item.item)} >+</button><h3 className="p-2">{quantity}</h3><button className="bg-slate-200 hover:bg-slate-400 text-green-900 text-2xl  px-2 border rounded" onClick={()=>handledecreaseq(item.item)} >-</button>
            </div>
          </div> 
       </div>
        </>

       
     );
  }

export default FoodItem;