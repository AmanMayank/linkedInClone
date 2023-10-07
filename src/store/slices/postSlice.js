import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    // actor: {
    //   name: "",
    //   email: "",
    //   photo: "",
    // },
    image: "",
    video: "",
    comments: 0,
    description: "",
  },
  reducers: {
    setPosts(state, action) {
      // state.actor.name = action.payload.user.displayName;
      // state.actor.email = action.payload.user.email;
      // state.actor.photo = action.payload.user.photoURL;

      state.image = action.payload.image.name;
      state.video = action.payload.video;
      state.description = action.payload.description;
    },
  },
});

export const { setPosts } = postSlice.actions;
export const postsReducer = postSlice.reducer;
