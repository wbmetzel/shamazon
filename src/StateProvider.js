import React, { createContext, useContext, useReducer } from "react";

// Initiate data layer
export const StateContext = createContext();

// Data layer wrapper
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// watch data layer
export const useStateValue = () => useContext(StateContext);
