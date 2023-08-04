import { ActionType } from "./ActionType";

export const initialState = {
  loading: false,
  error: false,
  products: [],
  cart: [],
  wishlist: [],
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case ActionType.FETCH_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case ActionType.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ActionType.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    default:
      return state;
  }
};
