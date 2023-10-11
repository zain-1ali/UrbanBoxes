import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// read action

export const siteData = createAsyncThunk(
  "siteData",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://urbanapis.link2avicenna.com/api/websiteSettings"
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  data: {},
  loading: true,
  error: null,
};

export const siteDetail = createSlice({
  name: "siteDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [siteData.pending]: (state) => {
      state.loading = true;
    },

    [siteData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [siteData.rejected]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default siteDetail.reducer;
