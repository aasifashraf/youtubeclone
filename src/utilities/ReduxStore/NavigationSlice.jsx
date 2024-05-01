import { createSlice } from "@reduxjs/toolkit";
import FilterButtons from "../../components/Body/FilterButtons";

const NavigationSlice = createSlice({
  name: "Navigation",
  initialState: {
    show: true,
    filterbuttons: true,
  },
  reducers: {
    showNavigation: (state) => {
      state.show = !state.show;
    },
    hideSidebar: (state) => {
      state.show = false;
    },
    hideFilterButtons: (state) => {
      state.filterbuttons = false;
    },
    showFilterButtons: (state) => {
      state.filterbuttons = true;
    },
  },
});

export const {
  showNavigation,
  hideSidebar,
  hideFilterButtons,
  showFilterButtons,
} = NavigationSlice.actions;
export default NavigationSlice.reducer;
