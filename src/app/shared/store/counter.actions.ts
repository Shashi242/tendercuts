import { createAction,props } from "@ngrx/store";


export const addtocart = createAction("addToCart", props<{cartItem: number}>());
export const incrementValue = createAction('[Your Feature] Increment Value',props<{ itemId: any }>());
export const decrement = createAction('[Decreament] Decrement Value', props<{itemname: any}>());
export const removeItem = createAction("[Empty] Remove Item", props<{cartitem: any}>());

export const emptyCart = createAction("[Empty] emptyCart Item");