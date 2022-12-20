import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    addAccount: (state: string, action: PayloadAction<string>) => action.payload,
  }
})

export const { addAccount } = userSlice.actions

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer