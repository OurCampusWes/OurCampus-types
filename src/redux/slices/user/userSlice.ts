import { createSlice } from '@reduxjs/toolkit';
import { TruncatedUserModel } from '../../../models/userModel';
import { UserType } from '../../../types';
import { getUserReducer, registerReducer } from './reducers';

export type UserState = {
  currUser: UserType | Record<string, never>;
  userCollection: Record<string, TruncatedUserModel>;
  status: string;
};

const initialState: UserState = {
  currUser: {},
  userCollection: {},
  status: 'idle',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    registerReducer(builder);
    getUserReducer(builder);
  },
});

export const selectCurrentUser = (state) => state.user.currUser;
export const selectUserCollection = (state) => state.user.userCollection;

export * from './actions';
export default UserSlice.reducer;
