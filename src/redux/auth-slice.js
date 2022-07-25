import { createSlice } from '@reduxjs/toolkit';
import AuthOperation from './auth-operation';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshCurrentUser: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [AuthOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [AuthOperation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [AuthOperation.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  [AuthOperation.fetchCurrentUser.pending](state, action) {
    state.isRefreshCurrentUser = true;
  },
  [AuthOperation.fetchCurrentUser.fulfilled](state, action) {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshCurrentUser = false;
  },
});
export default authSlice.reducer;
