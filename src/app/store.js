import { configureStore } from "@reduxjs/toolkit";
/* import counterReducer from "../features/counter/counterSlice";
 */ import shopReducer from "../features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

/* export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
}); */
