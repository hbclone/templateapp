import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./modules/RootReducer";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";

const MakeStore = (context: any) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });

export const wrapper = createWrapper(MakeStore, {
  debug: process.env.NODE_ENV !== "production",
});
