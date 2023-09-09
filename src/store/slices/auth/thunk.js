import { loginUserWithEmailAndPassword, logoutUser, registerUserWithEmail } from "../../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuth = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmail(email, password, displayName);
    dispatch(login(result));
  };
};

export const startLoginWithEmailAndPassword = ({email, password}) => {
  return async(dispatch) => {
    dispatch(checkingCredentials())
    const result = await loginUserWithEmailAndPassword(email, password)
    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    await logoutUser()
    dispatch(logout())
  }
}