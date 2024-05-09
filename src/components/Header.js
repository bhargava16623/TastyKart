import { useContext, useState } from 'react';
import logo from '../assets/imagesprac/logo.png';
import UserContext from '../Utils/UserContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';


export const Header = ()=>{

  const [loggedIn,setLoggedIn]= useState(true);
  const {user,setUser}=useContext(UserContext);
  
  const cartItems = useSelector(store=> store.cart.items);
  const {totalitems}=useSelector(store=>store.cart);

  const logoutfunc=()=>{
    setLoggedIn(true);
    setUser({name:"",email:"",});
  };

 

    return(
     <>
      <div className="flex py-4 justify-between bg-pink-50 border-b border-gray-300 shadow-lg my-2 mx-2">
       <a className=" px-12 " href="/">
        <img data-testid="logo" className=" h-20" src={logo} alt="logo"/>
       </a>
        <ul className="flex py-6 px-10">
          <li className=" px-8 text-2xl"><Link to='/' className='li-col'>Home</Link></li>
          <li className=" px-8 text-2xl"><Link to='/about' className='li-col'>About</Link></li>
          <li className=" px-8 text-2xl"><Link to='/contact' className='li-col'>Contact</Link></li>
          {cartItems.length<1?
          <li className=" px-8 text-2xl"><Link   to='/cart' className='li-col'><FontAwesomeIcon title="cart" icon={faCartShopping} flip="horizontal" style={{color: "#241f31",}} /></Link></li>:
          <li className=" px-8 text-2xl"><Link to='/cart' className='li-col '><span data-testid="cart" className="font-bold text-white bg-red-500 border rounded-full px-2">{totalitems}</span> <FontAwesomeIcon icon={faCartShopping} flip="horizontal" style={{color: "#33d17a",}}/></Link></li>
          }
          <li className=" px-8 text-2xl">
            {loggedIn?
               <Link to='/signup' className='li-col'>
               <button className='init-button' onClick={()=>{setLoggedIn(false)}}>
                 Log In
              </button></Link>:
              <Link to='/' className='li-col'>
              <button className='init-button' onClick={()=>logoutfunc()}>
                Log Out
              </button></Link>}
          </li>
          <li className=" px-4 text-2xl"><FontAwesomeIcon title="user" icon={faUser} /></li>
          <li className="text-2xl">{user.name}</li>
        </ul>
        
       </div>
    </>
    );
 }