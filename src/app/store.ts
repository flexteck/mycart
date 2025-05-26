import { configureStore } from '@reduxjs/toolkit';
import { productAPI } from '../features/products/ProductApi';
import cartReducer from '../features/cart/cartSlice'; 

export const store = configureStore({
  reducer: {
    [productAPI.reducerPath]: productAPI.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
