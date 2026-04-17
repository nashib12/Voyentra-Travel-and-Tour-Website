import { useLenis } from "lenis/react";
import React, { createContext, useReducer } from "react";

const DataContext = createContext();

const initialState = "";

const reducer = (action, state) => {
  switch (action.type) {
    case "first/case":
      return state;
    default:
      return state;
  }
};

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const lenis = useLenis();
  return (
    <DataContext.Provider value={{ state, dispatch, lenis }}>
      {" "}
      {children}{" "}
    </DataContext.Provider>
  );
}
export default DataContext;
