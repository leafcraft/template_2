// globalQuantitySlice.js
import { createSlice } from '@reduxjs/toolkit';

const globalQuantitySlice = createSlice({
  name: 'globalQuantity',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => (state > 0 ? state - 1 : 0),
  },
});

export const { increment, decrement } = globalQuantitySlice.actions;
export default globalQuantitySlice.reducer;
