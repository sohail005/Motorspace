// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppColors } from '../../../constants/colors';

interface UserState {
  user: any;
  token: string | null;
  statusBarColor: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  statusBarColor: AppColors.white
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setStatusBarColor(state, action: PayloadAction<string>) {
      state.statusBarColor = action.payload; // ✅ Correct
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, logout, setStatusBarColor } = userSlice.actions;
export default userSlice.reducer;
