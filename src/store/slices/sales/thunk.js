import {
  deleteSale,
  loadSales,
  registerSale,
} from "../../../firebase/SalesProviders";
import { isCheckingSales, setSales } from "./salesSlice";

export const startRegisterSale = ({
  amountSale,
  lootSale,
  productSale,
  methodSale,
}) => {
  return async (dispatch) => {
    dispatch(isCheckingSales({ loading: true }));
    await registerSale(amountSale, lootSale, productSale, methodSale);
    dispatch(isCheckingSales({ loading: false }));
  };
};

export const startLoadingSales = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { totalSales, data } = await loadSales(uid);
    dispatch(setSales({ sales: data, loading: false, totalSales: totalSales }));
  };
};

export const startDeleteSale = (id) => {
  return async (dispatch, getState) => {
    dispatch(isCheckingSales({ loading: true }));
    const { uid } = getState().auth;
    await deleteSale(uid, id);
    const result = await loadSales(uid);
    dispatch(setSales({ loading: false, sales: result }));
  };
};
