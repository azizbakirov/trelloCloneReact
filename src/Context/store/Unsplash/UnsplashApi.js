import { createSlice } from "@reduxjs/toolkit";

export const UnsplashApi = createSlice({
  name: "unsplash api",
  initialState: {
    value: {
      acces_KEY: "RDbWz7AuVMuz5PeTxGyQj3z_zNqi34cIfgRonMlhraM",
      secret_KEY: "1OiNlDZeicm0ev5vM_tAIESSE8fNt1wi6i6QQ7_kDP0",
    },
  },
  reducers: {
    setUnsplashApi: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUnsplashApi } = UnsplashApi.actions;

export default UnsplashApi.reducer;
