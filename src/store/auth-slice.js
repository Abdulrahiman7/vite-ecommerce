import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
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
    logout(state) {
      state.token = null;
      state.userId = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
