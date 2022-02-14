import { createSlice } from "@reduxjs/toolkit";
import { CartModel } from "../models/CartModel";

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
        (item) => item.product?.id === action.payload.product?.id
      );

      if (existingIndex !== -1) {
        state.products[existingIndex].quantity = 0;
        state.total -= action.payload.product.price;
      }

      if (state.products[existingIndex].quantity === 0) {
        state.products.splice(existingIndex, 1);
      }
    },
    editAmount(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item.product?.id === action.payload.product?.id
      );

      if (existingIndex !== -1) {
        if (state.products[existingIndex].product) {
          if (state.products[existingIndex].quantity > 1) {
            state.total -=
              state.products[existingIndex]?.product?.attributes?.price!;
            state.products[existingIndex].quantity = action.payload.quantity;
            let totalPrice = state.products.reduce(function (
              accumulator,
              item
            ) {
              return (
                accumulator + item?.product?.attributes?.price! * item.quantity
              );
            },
            0);
            state.total = totalPrice;
          } else {
            state.products.splice(existingIndex, 1);
            let totalPrice = state.products.reduce(function (
              accumulator,
              item
            ) {
              return (
                accumulator + item?.product?.attributes?.price! * item.quantity
              );
            },
            0);
            state.total = totalPrice;
          }
        }
      }
    },
  },
});

export const { addToCart, editAmount, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
