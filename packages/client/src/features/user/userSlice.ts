import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    addUser: (state: string, action: PayloadAction<string>) => action.payload,
  }
})

export const { addUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer