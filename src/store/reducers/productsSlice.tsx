import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../models/ProductModel";
import client from "../api/config";

interface InitialState {
  products: ProductModel[];
  loading: boolean;
  error: string | null;
  status: string | null;
}

const initialState: InitialState = {
  error: null,
  loading: false,
  products: [],
  status: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched products to the array
        state.products = state.products.concat(action.payload.data);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        //state.error = action?.error?.message
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await client.get("/");
    return response.data;
  }
);

export default productsSlice.reducer;
