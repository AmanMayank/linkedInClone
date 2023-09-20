import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export { store };
export * from "./slices/userSlice";
