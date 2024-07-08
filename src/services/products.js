import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

//obtengo toda la colección de productos
export const getAllProducts = async () => {
  const data = await getDocs(collection(db, "products"));

  let products = [];

  data.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  console.log(products);

  return products;
};
