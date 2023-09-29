import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    image: "",
  },
  reducers: {
    setPosts(state, action) {
      state.image = action.payload.image;
    },
  },
});

export const { setPosts } = postSlice.actions;
export const postsReducer = postSlice.reducer;
