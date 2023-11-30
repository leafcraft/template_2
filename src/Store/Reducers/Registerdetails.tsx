// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the RegistrationState type
interface RegistrationState {
  name: string;
  dob: string;
  // Add other fields from registration as needed
}

// Initial state for registration
const initialRegistrationState = { name: '', dob: '' } as RegistrationState;

// Create a RegistrationSlice
const registrationSlice = createSlice({
  name: 'registration',
  initialState: initialRegistrationState,
  reducers: {
    setRegistrationData(state: RegistrationState, action: PayloadAction<RegistrationState>) {
      // Return a new state object with the updated values
      return { ...state, ...action.payload };
    },
    // Add other actions as needed
  },
});

// Export RegistrationReducer and actions
export const { setRegistrationData } = registrationSlice.actions;
export default registrationSlice.reducer;
