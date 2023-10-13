import { configureStore } from "@reduxjs/toolkit";
import taskValueReducer from "./TaskAddValue/TaskAddValueSlice";
import unsplashApiReducer from "./Unsplash/UnsplashApi";

export const store = configureStore({
  reducer: {
    data: taskValueReducer,
    // UNSPLASH>COM api
    api: unsplashApiReducer,
  },
});
