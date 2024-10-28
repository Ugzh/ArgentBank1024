import { createSlice } from "@reduxjs/toolkit";

export const userStatement = createSlice({
  name: "user",
  initialState: {
    value:
      (localStorage.getItem("Token") || sessionStorage.getItem("Token")) ??
      false,
  },
  reducers: {
    loggedIn: (state) => {
      state.value = true;
    },
    loggedOut: (state) => {
      state.value = false;
    },
  },
});

export const { loggedIn, loggedOut } = userStatement.actions;

export default userStatement.reducer;
