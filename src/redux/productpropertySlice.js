import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSepecification: true,
  isDetails: false,
  isCapabilities: false,
  isCoating: false,
  isSpecialCapabilities: false,
  isAvailbaleStyle: false,
};

export const productpropertySlice = createSlice({
  name: "productpropertyHandeler",
  initialState,
  reducers: {
    openSepecification: (state) => {
      state.isSepecification = true;
      state.isDetails = false;
      state.isCapabilities = false;
      state.isSpecialCapabilities = false;
      state.isCoating = false;
      state.isAvailbaleStyle = false;
    },

    openDetails: (state) => {
      state.isSepecification = false;
      state.isDetails = true;
      state.isCapabilities = false;
      state.isSpecialCapabilities = false;
      state.isCoating = false;
      state.isAvailbaleStyle = false;
    },

    openCapabilities: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = true;
      state.isSpecialCapabilities = false;
      state.isCoating = false;
      state.isAvailbaleStyle = false;
    },

    openSpecialCapabilities: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = false;
      state.isSpecialCapabilities = true;
      state.isCoating = false;
      state.isAvailbaleStyle = false;
    },

    openCoating: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = false;
      state.isSpecialCapabilities = false;
      state.isCoating = true;
      state.isAvailbaleStyle = false;
    },
    openAvailbaleStyle: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = false;
      state.isSpecialCapabilities = false;
      state.isCoating = false;
      state.isAvailbaleStyle = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openSepecification,
  openDetails,
  openCapabilities,
  openSpecialCapabilities,
  openCoating,
  openAvailbaleStyle,
} = productpropertySlice.actions;

export default productpropertySlice.reducer;
