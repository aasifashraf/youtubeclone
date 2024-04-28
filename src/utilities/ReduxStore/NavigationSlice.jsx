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
  },
});

export const { showNavigation } = NavigationSlice.actions;
export default NavigationSlice.reducer;
