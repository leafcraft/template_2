// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the LoginState type
interface LoginState {
  loginData: Array<any>; // Update the type as per your data structure
  accessToken:String | null ;
  // Add other fields as needed
}

// Create a LoginSlice
const loginSlice = createSlice({
  name: 'login',
  initialState: { loginData: [], accessToken:null } as LoginState,
  reducers: {
    setLoginData(state: LoginState, action: PayloadAction<Array<any>>) {
      // Assuming action.payload is an array of objects
      state.loginData = action.payload;
     
    },
    setAcessToken(state: LoginState, action: PayloadAction<string | null>){
        state.accessToken = action.payload;
       
    }
    // Add other actions as needed
  },
});

// Export LoginReducer and actions
export const { setLoginData,setAcessToken } = loginSlice.actions;
export default loginSlice.reducer;
