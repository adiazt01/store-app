import { createSlice } from "@reduxjs/toolkit";

export const salesSlice = createSlice({
  name: "sales",
  initialState: {
    loading: false,
    sales: [],
    amountSale: null /* Venta */,
    lootSale: null /* Cantidad */,
    productSale: null /* Producto vendido */,
    methodSale: null,
    idSale: null,
    totalSales: 0,
  },
  reducers: {
    isCheckingSales: (state, { payload }) => {
      state.loading = payload.loading;
    },
    setSales: (state, { payload }) => {
      state.sales = payload.sales;
      state.loading = payload.loading;
      state.totalSales = payload.totalSales;
    },
    activeSale: (state, { payload }) => {
      state.productSale = payload.productSale;
      state.amountSale = payload.amountSale;
      state.lootSale = payload.lootSale;
      state.idSale = payload.idSale;
      state.methodSale = payload.methodSale;
    },
    clearSale: (state) => {
      state.productSale = null;
      state.priceSale = null;
      state.lootSale = null;
      state.idSale = null;
      state.methodSale = null;
    },
  },
});

export const { isCheckingSales, setSales, activeSale, clearSale } =
  salesSlice.actions;
