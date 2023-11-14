// src/redux/reducer.js
const initialState = {
    productsData: [], // Initial state for productsData
    // ... other initial states
  };
  
  const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ProductsData':
        // Handle the action to update the productsData state
        return {
          ...state,
          productsData: action.payload,
        };
      // ... other cases for different actions
      default:
        return state;
    }
  };
  
  export default ProductsReducer;
  