import { createReducer, on } from "@ngrx/store";
import { addtocart, decrement, emptyCart, incrementValue, removeItem } from "./counter.actions";
// import { initialState } from "./counter.state";

// export const initialState=0;

export interface AppState {
    cart: any[]
}

const initialState: AppState = {
    cart: []
};

export const cartItemReducer = createReducer(initialState,
    on(addtocart, (state, action) => {
        return {
            ...state,
            cart: [...state.cart, action.cartItem]
        }
    }),
    on(incrementValue, (state, { itemId }) => {
        const updatedItems = state.cart.map(item => {
          if (item.name === itemId) {
            return { ...item, qty: item.qty + 1 };
          }
          return item;
        });
        return { ...state, cart: updatedItems };
      }),

      on(decrement, (state, { itemname }) => {
        const updatedItems = state.cart.map(item => {
          if (item.name === itemname) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        });
        return { ...state, cart: updatedItems };
      }),
      on(removeItem, (state, { cartitem }) => {
        const updatedItems = state.cart.filter((item:any) => item.name !== cartitem.name);
        return { ...state, cart: updatedItems };
      }),
      on(emptyCart, (state, action) => {
        return {
            ...state,
            cart: []
        }
    }),
    //   on(removeItem, (state, {cartitem})=>{
    //     return state.cart.filter((item:any) => item.id !== cartitem);
    //     })
    // on(decrement, (state) => state - 1)
);