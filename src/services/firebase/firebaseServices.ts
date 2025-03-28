import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const productsSnapshot = await getDocs(collection(db, "products"));
    const productsList: Product[] = productsSnapshot.docs.map((doc) => {
      const productData = doc.data() as Omit<Product, "id">;
      return {
        ...productData,
        id: doc.id,
      };
    });
    return productsList;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    const categoriesList: Category[] = categoriesSnapshot.docs.map((doc) => {
      const categoryData = doc.data() as Omit<Category, "id">;
      return {
        ...categoryData,
        id: doc.id,
      };
    });
    return categoriesList;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
