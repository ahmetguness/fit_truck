import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../models/Product";
import { Category } from "../../../models/Category";
import { Cart } from "../../../models/Cart";

interface AppState {
  products: Product[];
  categories: Category[];
  cart: Cart;
}

const initialState: AppState = {
  products: [],
  categories: [],
  cart: { ids: [], totalPrice: 0 },
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
    addToCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const index = state.cart.ids.indexOf(productId);
      const product = state.products.find((p) => p.id === productId);

      if (!product) return;

      if (index === -1) {
        state.cart.ids.push(productId);
        state.cart.totalPrice += product.price;
      } else {
        state.cart.ids.splice(index, 1);
        state.cart.totalPrice -= product.price;
      }
    },
    clearCart: (state) => {
      state.cart.ids = [];
      state.cart.totalPrice = 0;
    },
  },
});

export const { setProducts, setCategories, addToCart, clearCart } =
  appSlice.actions;
export default appSlice.reducer;
