import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";
import { postsReducer } from "./slices/postSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export { store };
export * from "./slices/userSlice";
export * from "./slices/postSlice";
