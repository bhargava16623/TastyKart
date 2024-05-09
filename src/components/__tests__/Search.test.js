import { render, waitFor,screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import Body from "../Body";
import store from "../../Utils/store";
import {Restaurant_data} from "../../Utils/mocks/data";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import Shimmer from "../Shimmer";

global.fetch = jest.fn(()=>{
   return  Promise.resolve({
        json: ()=>{return Promise.resolve(Restaurant_data)},
    }) ; 
    
});


test("Search results on homepage", async ()=>{
   let body;
   await act(async () => {
   body=  render(
        <StaticRouter>
           <Provider store={store}>
              <Body/>
           </Provider>
        </StaticRouter>
    );
   });
  const search=body.getByRole("search-btn");

  expect(search).toBeInTheDocument();
  
});

test("Shimmer loading", ()=>{
    const body= render(
        <StaticRouter>
           <Provider store={store}>
              <Body/>
           </Provider>
        </StaticRouter>
    );
  
  const shimmer=body.getByRole("shimmer-id");

  expect(shimmer.children.length).toBe(10);
  
 
});



test("restaurant card loading",async ()=>{
   let body;
   await act(async () => {
   body=  render(
        <StaticRouter>
           <Provider store={store}>
              <Body/>
           </Provider>
        </StaticRouter>
    );
   });
  
   await waitFor(()=>expect(body.findByRole("search-btn")));

  // await waitFor(()=>{ const reslist=body.getByTitle("restaurant-card");});

  const reslist=body.getByTestId("reslist");
  const numberOfRestaurants = reslist.querySelectorAll('a').length;

  expect(numberOfRestaurants).toBe(10);

});


test("Search for food in home page",async ()=>{
   let body;
   await act(async () => {
   body=  render(
        <StaticRouter>
           <Provider store={store}>
              <Body/>
           </Provider>
        </StaticRouter>
    );
   });
  
   await waitFor(()=>expect(body.findByRole("search-btn")));

   const input=body.getByTestId("search-input");

   fireEvent.change(input,{
      target:{
         value:"Mehfil",
      },
   });

   const searchBtn= body.getByRole("search-btn");

   fireEvent.click(searchBtn);

  const reslist=body.getByTestId("reslist");
  const numberOfRestaurants = reslist.querySelectorAll('a').length;

  expect(numberOfRestaurants).toBe(1);

});