import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "no-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
  },
  reducers: {
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload?.uid;
      state.email = payload?.email;
      state.displayName = payload?.displayName;
      state.photoURL = payload?.photoURL;
    },
    logout: (state) => {
      state.status = "no-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
    },
  },
});

export const { login, checkingCredentials, logout } = authSlice.actions;
