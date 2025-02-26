import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
  },
  reducers: {
    storeOrder(state, action) {
      const newOrder = {
        items: action.payload.items,
        date: action.payload.date,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      };
      state.orders.push(newOrder);
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;
