import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: 0,
    maxUser: 0,
  },
  reducers: {
    newUser: (state) => {
      state.maxUser++;
      state.currentUser = state.maxUser;
    },
    switchUser: (state, action) => {
      const user = action.payload;
      if (user <= state.maxUser) state.currentUser = user;
    },
  },
});

export const selectCurrentUser = (state) => state.users.currentUser;
export const selectMaxUser = (state) => state.users.maxUser;
export const { newUser, switchUser } = usersSlice.actions;
export default usersSlice.reducer;
