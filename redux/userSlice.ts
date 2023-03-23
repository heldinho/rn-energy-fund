import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type User = {
  username: string,
  password: string
}

const initialState: User = { username: null, password: null }

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    set(state, action: PayloadAction<User>) {
      state.username = action.payload.username;
      state.password = action.payload.password
    },
    clear(state) {
      state = initialState
    }
  }
});

export const { set, clear } = userSlice.actions
export default userSlice.reducer