// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the LogoutState type
interface LogoutState {
  // Add other fields as needed
}

// Create a LogoutSlice
const logoutSlice = createSlice({
  name: 'logout',
  initialState: {} as LogoutState,
  reducers: {
    // Add a logout action if needed
    setlogout() {
      // Reset or clear any relevant state for logout
    },
    // Add other actions as needed
  },
});

// Export LogoutReducer and actions
export const { setlogout } = logoutSlice.actions;
export default logoutSlice.reducer;
