import React, { useReducer } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  ProductReducer,
  initialState,
} from "../state/ProductState/ProductReducer";
import { ActionType } from "../state/ProductState/ActionType";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [data, setdata] = useState([]);

  const [state, dispatch] = useReducer(ProductReducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: ActionType.FETCH_START });
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ActionType.FETCH_SUCCESS, payload: data.data })
      );
  }, []);
  const value = { state, dispatch };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};
export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};
export default ProductProvider;
