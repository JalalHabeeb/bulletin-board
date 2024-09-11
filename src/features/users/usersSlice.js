import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Tiago" },
  { id: "1", name: "Luis" },
  { id: "2", name: "Ricardo" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
