import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = {
  email?: string;
  password?: string;
};

const initialState: User = { email: null, password: null };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    set(state, action: PayloadAction<User>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clear(state) {
      state = initialState;
    },
  },
});

export const { set, clear } = userSlice.actions;
export default userSlice.reducer;
