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

export const registerSale = async (
  amountSale,
  lootSale,
  productSale,
  methodSale
) => {
  try {
    const uid = getAuth().currentUser.uid;
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    const newRefProduct = collection(FirebaseDB, `usuarios/${uid}/ventas`);
    await addDoc(newRefProduct, {
      amountSale,
      lootSale,
      productSale,
      methodSale,
      time: hoy.toLocaleDateString(),
    }).then((docRef) => updateDoc(docRef, { idSale: docRef.id }));
  } catch (error) {
    console.log(error);
  }
};

export const loadSales = async (uid) => {
  try {
    const q = query(collection(FirebaseDB, `usuarios/${uid}/ventas`));
    const querySnapshot = await getDocs(q);
    let totalSales = 0;
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), idSale: doc.id });
      totalSales += parseInt(doc.data().amountSale);
    });
    return { totalSales, data };
  } catch (error) {
    console.log(error);
  }
};

export const deleteSale = async (uid, idSale) => {
  try {
    await deleteDoc(doc(FirebaseDB, `/usuarios/${uid}/ventas/${idSale}`));
  } catch (error) {
    console.log(error);
  }
};
