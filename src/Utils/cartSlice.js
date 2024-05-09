import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name:"cart",
    initialState:{
        items:[],
        totalprice:0,
        totalitems:0,
    },
    reducers:{
        addItem: (state,action)=>{
            const itemIndex= state.items.findIndex((item)=>item.id===action.payload.id);
            if(itemIndex>=0 && state.items[itemIndex].quantity<10)
            {
                state.items[itemIndex].quantity+=1;
                state.items[itemIndex].amount=(state.items[itemIndex].price/100)*state.items[itemIndex].quantity;
                console.log(state.items[itemIndex]);
            }
            else if(itemIndex<0){
                const tempProduct={...action.payload,quantity:1,amount:action.payload.price/100}; 
                
                state.items.push(tempProduct);
            }
            
        },
        removeItem: (state,action)=>{
           const newcartItems= state.items.filter((item)=>item.id!==action.payload.id);
           state.items=newcartItems;
        },
        clearCart: (state)=>{
            state.items=[];
        },
        decreaseItemQ: (state,action)=>{
            const itemIndex= state.items.findIndex((item)=>item.id===action.payload.id);
            if(state.items[itemIndex].quantity>1)
            {
                state.items[itemIndex].quantity-=1;
                state.items[itemIndex].amount=(state.items[itemIndex].price/100)*state.items[itemIndex].quantity;
                
            }
            else{
                const newcartItems= state.items.filter((item)=>item.id!==action.payload.id);
                state.items=newcartItems;
            }
            
        },
        
        totals: (state)=>{
            let {total, quantity}   = state.items.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
            
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;
                    return cartTotal;
                },
            {
                total:0,
                quantity:0,
            }
            );
            state.totalprice=total;
            state.totalitems=quantity;
        },
        
    },

});

export const {addItem,removeItem,clearCart,decreaseItemQ,totals} = cartSlice.actions;
export default cartSlice.reducer;