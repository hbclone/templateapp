import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import ColorMode from "./ColorMode";

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    ColorMode,
  })(state, action);
};

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
