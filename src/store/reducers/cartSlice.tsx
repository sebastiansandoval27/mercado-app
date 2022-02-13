import { createSlice, current } from "@reduxjs/toolkit";
import { CartModel } from "../models/CartModel";
import { ProductModel } from "../models/ProductModel";

const initialState = {
  products: [] as CartModel[],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item.product?.id === action.payload?.product.id
      );

      if (existingIndex !== -1) {
        state.products[existingIndex].quantity += action.payload?.quantity;
        state.total += action.payload?.product.attributes.price;
      } else {
        state.products.push({
          product: action.payload.product,
          quantity: action.payload?.quantity,
        });
        state.total += action.payload?.product.attributes.price;
      }
    },
    removeFromCart(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item.product?.id === action.payload?.id
      );

      if (existingIndex !== -1) {
        state.products[existingIndex].quantity = 0;
        state.total -= action.payload.price;
      }

      if (state.products[existingIndex].quantity === 0) {
        state.products.splice(existingIndex, 1);
      }
    },
    editAmount(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item.product?.id === action.payload?.id
      );

      if (existingIndex !== -1) {
        if (state.products[existingIndex].product) {
          state.total -=
            state.products[existingIndex]?.product?.attributes?.price!;
          state.products[existingIndex].quantity = action.payload.quantity;
          let totalPrice = state.products.reduce(function (accumulator, item) {
            return (
              accumulator + item?.product?.attributes?.price! * item.quantity
            );
          }, 0);
          state.total = totalPrice;
        }
      }
    },
  },
});

export const { addToCart, editAmount, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
