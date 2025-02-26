import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
          imageUrl: newItem.imageUrl,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    incrementItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        state.totalQuantity++;
        state.changed = true;
      }
    },
    decrementItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        state.totalQuantity--;
        state.changed = true;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    deleteItem(state, action) {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        if (existingItem) {
          state.totalQuantity = state.totalQuantity - existingItem.quantity;
          state.changed = true;
          state.items = state.items.filter((item) => item.id !== id);
        }
      },
      clearCart(state) {
        state.items = [];
        state.totalQuantity = 0;
        state.changed = false;
      },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
