import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux toolkit",
    content:
      "I've heard good things about Redux toolkit and I want to learn it",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
