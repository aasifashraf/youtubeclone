import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice from "./NavigationSlice";

const store = configureStore({
  reducer: {
    Navigation: NavigationSlice.reducer,
  },
});

export default store;
