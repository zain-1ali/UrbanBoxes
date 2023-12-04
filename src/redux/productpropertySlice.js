import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSepecification: true,
  isDetails: false,
  isCapabilities: false,
  isCoating: false,
  isSpecialCapabilities: false,
  isAvailbaleStyle: false,
  isReview: false,
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
      state.isReview = false;
    },

    openDetails: (state) => {
      state.isSepecification = false;
      state.isDetails = true;
      state.isCapabilities = false;
      state.isSpecialCapabilities = false;
      state.isCoating = false;
      state.isAvailbaleStyle = false;
      state.isReview = false;
    },

    openCapabilities: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = true;
      state.isSpecialCapabilities = false;
      state.isCoating = false;
      state.isAvailbaleStyle = false;
      state.isReview = false;
    },

    openSpecialCapabilities: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = false;
      state.isSpecialCapabilities = true;
      state.isCoating = false;
      state.isAvailbaleStyle = false;
      state.isReview = false;
    },

    openCoating: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = false;
      state.isSpecialCapabilities = false;
      state.isCoating = true;
      state.isAvailbaleStyle = false;
      state.isReview = false;
    },
    openAvailbaleStyle: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = false;
      state.isSpecialCapabilities = false;
      state.isCoating = false;
      state.isAvailbaleStyle = true;
      state.isReview = false;
    },
    openReview: (state) => {
      state.isSepecification = false;
      state.isDetails = false;
      state.isCapabilities = false;
      state.isSpecialCapabilities = false;
      state.isCoating = false;
      state.isAvailbaleStyle = false;
      state.isReview = true;
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
  openReview,
} = productpropertySlice.actions;

export default productpropertySlice.reducer;
