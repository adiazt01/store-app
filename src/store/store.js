import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { productSlice } from "./slices/products/productsSlice";
import { salesSlice } from "./slices/sales/salesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    products: productSlice.reducer,
    sales: salesSlice.reducer,
  },
});
