import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

export const registerUserWithEmail = async (email, password, displayName) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { photoURL, uid } = result.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName, photoURL });
    return { uid, email, photoURL, displayName };
  } catch (error) {
    console.log(error);
  }
};

export const loginUserWithEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, displayName, photoURL } = result.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName, photoURL });
    return { uid, email, photoURL, displayName };
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(FirebaseAuth);
  } catch (error) {
    console.log(error);
  }
};
