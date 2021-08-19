import { combineReducers } from '@reduxjs/toolkit';
import { AuthState } from './auth.type';
import auth from './auth.slice';
export interface DefaultRootState {
  auth: AuthState;
}

const rootReducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
