import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../../firebase/config";
import { login, logout } from "../../store/slices/auth/authSlice";
import { startLoadingProducts } from "../../store/slices/products/thunk";
import { startLoadingSales } from "../../store/slices/sales/thunk";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const { loading: loadingSales } = useSelector((state) => state.sales);
  const { loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startLoadingProducts());
      dispatch(startLoadingSales());
    });
  }, [loading, loadingSales]);

  return { status };
};
