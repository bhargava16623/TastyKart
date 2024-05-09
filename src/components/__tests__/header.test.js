import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import {Header} from "../Header";
import '@testing-library/jest-dom'
import store from "../../Utils/store";

test("Logo should load on rendering header",()=>{
    const header=render(
        <StaticRouter>
           <Provider store={store}>
              <Header/>
           </Provider>
        </StaticRouter>
    );

  const logo=header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png");

});

test("Cart img should render",()=>{
    const header=render(
        <StaticRouter>
           <Provider store={store}>
              <Header/>
           </Provider>
        </StaticRouter>
    );
  
  
  
  expect(screen.getByTitle('cart')).toBeInTheDocument();
  
 
});

test("User icon should render",()=>{
    const header=render(
        <StaticRouter>
           <Provider store={store}>
              <Header/>
           </Provider>
        </StaticRouter>
    );
  
  
  
  expect(screen.getByTitle('user')).toBeInTheDocument();
  
 
});