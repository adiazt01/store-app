import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { FirebaseDB } from "./config";
import { getAuth } from "firebase/auth";

export const createProduct = async (productName, priceProduct) => {
  try {
    const uid = getAuth().currentUser.uid;
    const newRefProduct = collection(FirebaseDB, `usuarios/${uid}/productos`);
    await addDoc(newRefProduct, {
      productName,
      priceProduct,
    }).then((docRef) => updateDoc(docRef, { id: docRef.id }));
  } catch (error) {
    console.log(error);
  }
};

export const loadProducts = async (uid) => {
  try {
    const q = query(collection(FirebaseDB, `usuarios/${uid}/productos`));
    const querySnapshot = await getDocs(q);

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (uid, id) => {
  try {
    await deleteDoc(doc(FirebaseDB, `/usuarios/${uid}/productos/${id}`));
  } catch (error) {
    console.log(error);
  }
};
