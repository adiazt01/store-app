import {
  createProduct,
  deleteProduct,
  loadProducts,
} from "../../../firebase/DatabaseProviders";
import { isCheckingProducts, setProducts } from "./productsSlice";

export const startCreatingProduct = ({ productName, productPrice }) => {
  return async (dispatch) => {
    dispatch(isCheckingProducts({ loading: true }));
    await createProduct(productName, productPrice);
    dispatch(isCheckingProducts({ loading: false }));
  };
};

export const startLoadingProducts = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const result = await loadProducts(uid);
    dispatch(setProducts({ products: result, loading: false }));
  };
};

export const startDeleteProduct = (id) => {
  return async (dispatch, getState) => {
    dispatch(isCheckingProducts({ loading: true }));
    const { uid } = getState().auth;
    await deleteProduct(uid, id);
    const result = await loadProducts(uid);
    dispatch(setProducts({ loading: false, products: result }));
  };
};
