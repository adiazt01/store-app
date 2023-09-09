import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    productName: null,
    priceProduct: null,
    idProduct: null,
  },
  reducers: {
    isCheckingProducts: (state, { payload }) => {
      state.loading = payload.loading;
    },
    setProducts: (state, { payload }) => {
      state.products = payload.products;
      state.loading = payload.loading;
    },
    activeProduct: (state, { payload }) => {
      state.productName = payload.productName;
      state.priceProduct = payload.priceProduct;
      state.idProduct = payload.idProduct;
    },
    clearProduct: (state) => {
      state.productName = null;
      state.priceProduct = null;
      state.idProduct = null;
    },
  },
});

export const { isCheckingProducts, activeProduct, clearProduct, setProducts } =
  productSlice.actions;
