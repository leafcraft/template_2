// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the LoginState type
interface LoginState {
  loginData: Array<any>; // Update the type as per your data structure
  // Add other fields as needed
}

// Create a LoginSlice
const loginSlice = createSlice({
  name: 'login',
  initialState: { loginData: [] } as LoginState,
  reducers: {
    setLoginData(state: LoginState, action: PayloadAction<Array<any>>) {
      // Assuming action.payload is an array of objects
      state.loginData = action.payload;
     
    },
    resetLoginData(state: LoginState) {
      // Reset loginData to an empty array
      state.loginData = [];
    },
    // Add other actions as needed
  },
});

// Export LoginReducer and actions
export const { setLoginData,resetLoginData } = loginSlice.actions;
export default loginSlice.reducer;
