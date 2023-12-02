// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';

// Define the CartItem type
interface CartItem {
  id: string;
  name: string;
  size: string;
  price: any;
  quantity: any;
  // Add other properties as needed
}

// Define the CartState type
interface CartState {
  cartItems: CartItem[];
  // Add other fields as needed
}

// Create a CartSlice
const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [] } as CartState,
  reducers: {
    addToCart: (state, action) => {
      const { id, size, name, price } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id && item.size === size);

      if (existingItem) {
        // Item already exists in the cart, increment quantity
        existingItem.quantity += 1;
      } else {
        // Item is not in the cart, add it with quantity 1
        state.cartItems.push({ id, size, name, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.cartItems = state.cartItems.filter((item) => !(item.id === id && item.size === size));
    },
    resetCart(state: CartState) {
      // Reset cart items to an empty array
      state.cartItems = [];
    },
    // Add other actions as needed
  },
});

// Export CartReducer and actions
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
