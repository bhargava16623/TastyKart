import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Title";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import SignupForm from "./components/Signup";



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
    
     return(
      <>
         <Header/>
         <Outlet/>
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
      ]
    },
    

]);


const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

