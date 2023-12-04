// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the CartState type
interface CartState {
  cartData: {
    cartItems: Array<any>; // Update the type as per your data structure for cart items
    subtotal: number;
  };
  // Add other fields as needed
}

// Create a CartSlice
const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartData: { cartItems: [], subtotal: 0 } } as CartState,
  reducers: {
    setCartData(state: CartState, action: PayloadAction<{ cartItems: Array<any>; subtotal: number }>) {
      state.cartData = action.payload;
    },
    resetCartData(state: CartState) {
      // Reset cartData to the initial state
      state.cartData = { cartItems: [], subtotal: 0 };
    },
    // Add other actions as needed
  },
});

// Export CartReducer and actions
export const { setCartData, resetCartData } = cartSlice.actions;
export default cartSlice.reducer;
