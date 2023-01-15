import { createSlice } from "@reduxjs/toolkit";

export const UI = createSlice({
  name: "login",
  initialState: {
    login: false,
  },
  reducers: {
    toggleLogin: (state) => !state.login,
  },
});

export const { toggleLogin } = UI.actions;

export default UI.reducer;
