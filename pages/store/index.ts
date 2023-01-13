import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer, { combinedReducers, ReducerType } from "./modules/RootReducer";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type OurStore = ReturnType<typeof combinedReducers>;

const MakeStore = () => {
  const middleware = getDefaultMiddleware();
  if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
  }

  const store = configureStore({
    reducer,
    middleware: middleware,
    devTools: process.env.NODE_ENV !== "production",
  });

  return store;
};
export const wrapper = createWrapper(MakeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export const store = MakeStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReducerType> = useSelector;
