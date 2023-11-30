// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the ProductState type
interface ProductState {
  products: Array<any>; // Update the type as per your product data structure
  // Add other fields as needed
}

// Create a ProductSlice
const productSlice = createSlice({
  name: 'product',
  initialState: { products: [] } as ProductState,
  reducers: {
    setProducts(state: ProductState, action: PayloadAction<Array<any>>) {
      // Assuming action.payload is an array of product objects
      state.products = action.payload;
    },
    addProduct(state: ProductState, action: PayloadAction<any>) {
      // Assuming action.payload is a single product object
      state.products.push(action.payload);
    },
    resetProducts(state: ProductState) {
      // Reset products to an empty array
      state.products = [];
    },
    // Add other actions as needed
  },
});

// Export ProductReducer and actions
export const { setProducts, addProduct, resetProducts } = productSlice.actions;
export default productSlice.reducer;
