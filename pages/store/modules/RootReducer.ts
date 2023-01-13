import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import ColorMode from "./ColorMode";
import Menu from "./Menu";

export const combinedReducers = combineReducers({
  ColorMode,
  Menu,
});

const Rootreducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combinedReducers(state, action);
};

export type ReducerType = ReturnType<typeof Rootreducer>;

export default Rootreducer;
