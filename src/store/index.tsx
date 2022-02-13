import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./reducers/productsSlice";
import { cartSlice } from "./reducers/cartSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
