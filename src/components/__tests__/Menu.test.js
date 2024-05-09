import { render, waitFor,screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import RestaurantMenu from "../RestaurantMenu";
import store from "../../Utils/store";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import { Restaurant_menu } from "../../Utils/mocks/data";
import {Header} from "../Header";


global.fetch = jest.fn(()=>{
    return  Promise.resolve({
         json: ()=>{return Promise.resolve(Restaurant_menu)},
     }) ; 
     
 });
 

test("Add items to cart",async ()=>{
    let menu;
    await act(async () => {
    menu=  render(
         <StaticRouter>
            <Provider store={store}>
                <Header/>
               <RestaurantMenu/>
            </Provider>
         </StaticRouter>
     );
    });
   
    await waitFor(()=>expect(menu.findByRole("menu")));
 
    
    const addBtn= menu.getAllByTestId("add");
 
    fireEvent.click(addBtn[0]);
 
   const cart=menu.getByTestId("cart");
 
   expect(cart.innerHTML).toBe("1");
 
 });