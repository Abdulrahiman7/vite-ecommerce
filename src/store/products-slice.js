import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    all: [],
    1: [],
    2: [],
    3: [],
    4: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setProducts(state, action) {
      const categoryId = Object.keys(action.payload)[0];
      if (categoryId === 'all') {
        state.all = action.payload[categoryId];
      } else {
        state[categoryId] = action.payload[categoryId];
      }
      state.isLoading = false;
      state.error = null;
    },
    setLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    setError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
