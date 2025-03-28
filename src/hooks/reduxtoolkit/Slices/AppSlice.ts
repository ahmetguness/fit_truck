import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../models/Product";
import { Category } from "../../../models/Category";

interface AppState {
  products: Product[];
  categories: Category[];
}

const initialState: AppState = {
  products: [],
  categories: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setProducts, setCategories } = appSlice.actions;
export default appSlice.reducer;
