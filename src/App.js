import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import SignupForm from "./components/Signup";
import Cart from "./components/Cart";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";

/**
 *     header
 *      -logo
 *      -home
 *      -about
 *      -cart
 *     Body
 *       -restaurent card
 *     Footer
 */    

const Applayout = ()=> {
    
    const [user,setUser]=useState({
      name:"",
      email:"",
    })
    

     return(
      <>
         <Provider store={store}>
            <UserContext.Provider value={{user:user,setUser:setUser}}>
               <Header/>
               <Outlet/>
            </UserContext.Provider>
         </Provider>
         <Footer/>
      </>
     );
};

const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Applayout/>,
      errorElement:<Error/>,
      children:[
         {
            path:"/about",
            element:<About/>,
         },
         {
            path:"/",
            element:<Body/>,
         },
         {
            path:"/contact",
            element:<Contact/>,
         },
         {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>,
         },
         {
            path:"/signup",
            element:<SignupForm/>,
         },
         {
            path:"/cart",
            element:<Cart/>,
         },
      ]
    },
    

]);


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

