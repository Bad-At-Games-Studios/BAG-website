import { configureStore } from "@reduxjs/toolkit";
import { websiteApiSlice } from "../slices/websiteApiSlice/websiteApiSlice";


export const store = configureStore({
  reducer: {
    [websiteApiSlice.reducerPath]: websiteApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websiteApiSlice.middleware),
});