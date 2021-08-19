import { CredentialsEntity } from '@avi-traveler/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './auth.type';

export const initialState: AuthState = {
  entity: null,
  isSignedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInSuccess(state, action: PayloadAction<CredentialsEntity>) {
      return {
        ...state,
        entity: action?.payload,
        isSignedIn: true,
        error: null,
      };
    },
  },
});

export default authSlice.reducer;
