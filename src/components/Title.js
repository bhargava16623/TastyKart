import { useState } from 'react';
import logo from '../assets/imagesprac/logo.png';

import { Link } from 'react-router-dom';

export const Header = ()=>{

  const [loggedIn,setLoggedIn]= useState(true);

    return(
     <>
      <div className="flex py-4 justify-between bg-pink-50 border-b border-gray-300 shadow-lg my-2 mx-2">
       <a className=" px-12 " href="/">
        <img className=" h-20" src={logo} alt="logo"/>
       </a>
        <ul className="flex py-6 px-10">
          <li className=" px-8 text-2xl"><Link to='/' className='li-col'>Home</Link></li>
          <li className=" px-8 text-2xl"><Link to='/about' className='li-col'>About</Link></li>
          <li className=" px-8 text-2xl"><Link to='/contact' className='li-col'>Contact</Link></li>
          <li className=" px-8 text-2xl"><Link to='/' className='li-col'>Cart</Link></li>
          <li className=" px-8 text-2xl">
            {loggedIn?
               <Link to='/signup' className='li-col'>
               <button className='init-button' onClick={()=>{setLoggedIn(false)}}>
                 Log In
              </button></Link>:
              <Link to='/' className='li-col'>
              <button className='init-button' onClick={()=>{setLoggedIn(true)}}>
                Log Out
              </button></Link>}
          </li>
        </ul>
        
       </div>
    </>
    );
 }