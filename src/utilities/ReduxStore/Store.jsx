import { configureStore } from "@reduxjs/toolkit";
import NavigationSlice, { hideSidebar } from "./NavigationSlice";

const store = configureStore({
  reducer: {
    Navigation: NavigationSlice,
  },
});

export default store;
