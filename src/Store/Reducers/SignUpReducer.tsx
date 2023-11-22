import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the SignUpState type
interface SignUpState {
  username: string;
  password: string;
  // Add other fields from SignUpValues as needed
}

const initialSignUpState = { username: '', password: '' } as SignUpState;

// Create a SignUpSlice
const signUpSlice = createSlice({
  name: 'signUp',
  initialState: initialSignUpState,
  reducers: {
    setSignUpData(state, action: PayloadAction<SignUpState>) {
        console.log(action.payload,"reducer sign up")
      return action.payload;
    },
    // Add other actions as needed
  },
});

// Export SignUpReducer and actions
export const { setSignUpData } = signUpSlice.actions;
export default signUpSlice.reducer;
