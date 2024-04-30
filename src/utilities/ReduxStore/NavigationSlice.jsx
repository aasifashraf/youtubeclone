import { createSlice } from "@reduxjs/toolkit";

const NavigationSlice = createSlice({
  name: "Navigation",
  initialState: {
    show: true,
  },
  reducers: {
    showNavigation: (state) => {
      state.show = !state.show;
    },
    hideSidebar: (state) => {
      state.show = false;
    },
  },
});

export const { showNavigation, hideSidebar } = NavigationSlice.actions;
export default NavigationSlice.reducer;
