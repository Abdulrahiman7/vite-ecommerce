import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products-slice';
import authReducer from './auth-slice';
import cartReducer from './cart-slice';
import orderReducer from './order-slice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
