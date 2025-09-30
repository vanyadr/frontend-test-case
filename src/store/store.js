import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appStore/appSlice";
import cartSlice from "./cartStore/cartSlice";
import productSlice from "./productStore/productSlice";
import userSlice from "./userStore/userSlice";

export const store = configureStore({
   reducer: {
      app: appSlice,
      cart: cartSlice,
      user: userSlice,
      product: productSlice,
   },
});
