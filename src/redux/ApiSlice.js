import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let baseUrl = import.meta.env.VITE_BASE_URL;

// ----------------------------------------header Foter Layout----------------------------------------------

export const headerFoterLayout = createAsyncThunk(
  "headerFoterLayout",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/layout`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------home page data api----------------------------------------------

export const homePage = createAsyncThunk(
  "homePage",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/homePage`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------schedule Meetings api----------------------------------------------

export const scheduleMeetings = createAsyncThunk(
  "scheduleMeetings",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/scheduleMeetings`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------category Page api----------------------------------------------

export const categoryPage = createAsyncThunk(
  "categoryPage",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/categoryPage`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------go Green Page----------------------------------------------

export const goGreenPage = createAsyncThunk(
  "goGreenPage",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/goGreenPage`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------go Green Page----------------------------------------------

export const luxuryFinishPage = createAsyncThunk(
  "luxuryFinishPage",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/luxuryFinishPage`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------about Page----------------------------------------------

export const aboutPage = createAsyncThunk(
  "aboutPage",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/aboutPage`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------by Style Page----------------------------------------------

export const byStylePage = createAsyncThunk(
  "byStylePage",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/byStylePage`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------contact Page----------------------------------------------

export const contactPage = createAsyncThunk(
  "contactPage",
  async (args, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/contactPage`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------Products By Category Id----------------------------------------------

export const ProductsByCategoryId = createAsyncThunk(
  "ProductsByCategoryId",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `${baseUrl}/api/getProductsByCategoryId/${id}`
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

// ----------------------------------------get Product By Id----------------------------------------------

export const getProductById = createAsyncThunk(
  "getProductById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getProductById/${id}`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------get Other Pages----------------------------------------------

export const getOtherPages = createAsyncThunk(
  "getOtherPages",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getAllPages`);
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------get Custom Pages----------------------------------------------

export const getSingleCustomPage = createAsyncThunk(
  "getSingleCustomPage",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getPageById/${id}`);
    try {
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// ----------------------------------------get Custom Pages----------------------------------------------

export const getGallaryData = createAsyncThunk(
  "getGallaryData",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${baseUrl}/api/getAllGalleries`);
    try {
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const initialState = {
  data: {},
  headerFoterData: {},
  homePageData: {},
  response: "",
  loading: true,
  scheduleMeetingsData: {},
  categoryData: {},
  goGreenData: {},
  luxuryFinishData: {},
  byStyleData: {},
  aboutData: {},
  contactData: {},
  Products: {},
  singleProduct: {},
  otherPages: {},
  otherSinglePage: {},
  gallaryData: {},
};

export const ApiSlice = createSlice({
  name: "ApiSlice",
  initialState,
  reducers: {},
  extraReducers: {
    // ----------------------------------------header Foter Layout----------------------------------------------

    [headerFoterLayout.pending]: (state) => {
      state.loading = true;
    },

    [headerFoterLayout.fulfilled]: (state, action) => {
      state.headerFoterData = action.payload;
      state.loading = false;
    },
    [headerFoterLayout.rejected]: (state, action) => {
      state.loading = false;
      state.headerFoterData = action.payload;
    },

    // ----------------------------------------home Page Data----------------------------------------------

    [homePage.pending]: (state) => {
      state.loading = true;
    },

    [homePage.fulfilled]: (state, action) => {
      state.homePageData = action.payload;
      state.loading = false;
    },
    [homePage.rejected]: (state, action) => {
      state.loading = false;
      state.homePageData = action.payload;
    },

    // ----------------------------------------schedule Meetings----------------------------------------------

    [scheduleMeetings.pending]: (state) => {
      state.loading = true;
    },

    [scheduleMeetings.fulfilled]: (state, action) => {
      state.scheduleMeetingsData = action.payload;
      state.loading = false;
    },
    [scheduleMeetings.rejected]: (state, action) => {
      state.loading = false;
      state.scheduleMeetingsData = action.payload;
    },

    // ----------------------------------------category Page----------------------------------------------

    [categoryPage.pending]: (state) => {
      state.loading = true;
    },

    [categoryPage.fulfilled]: (state, action) => {
      state.categoryData = action.payload;
      state.loading = false;
    },
    [categoryPage.rejected]: (state, action) => {
      state.loading = false;
      state.categoryData = action.payload;
    },

    // ----------------------------------------go Green Page----------------------------------------------

    [goGreenPage.pending]: (state) => {
      state.loading = true;
    },

    [goGreenPage.fulfilled]: (state, action) => {
      state.goGreenData = action.payload;
      state.loading = false;
    },
    [goGreenPage.rejected]: (state, action) => {
      state.loading = false;
      state.goGreenData = action.payload;
    },

    // ----------------------------------------luxury Finish Page----------------------------------------------

    [luxuryFinishPage.pending]: (state) => {
      state.loading = true;
    },

    [luxuryFinishPage.fulfilled]: (state, action) => {
      state.luxuryFinishData = action.payload;
      state.loading = false;
    },
    [luxuryFinishPage.rejected]: (state, action) => {
      state.loading = false;
      state.luxuryFinishData = action.payload;
    },

    // ----------------------------------------by Style Page----------------------------------------------

    [byStylePage.pending]: (state) => {
      state.loading = true;
    },

    [byStylePage.fulfilled]: (state, action) => {
      state.byStyleData = action.payload;
      state.loading = false;
    },
    [byStylePage.rejected]: (state, action) => {
      state.loading = false;
      state.byStyleData = action.payload;
    },

    // ----------------------------------------about Page----------------------------------------------

    [aboutPage.pending]: (state) => {
      state.loading = true;
    },

    [aboutPage.fulfilled]: (state, action) => {
      state.aboutData = action.payload;
      state.loading = false;
    },
    [aboutPage.rejected]: (state, action) => {
      state.loading = false;
      state.aboutData = action.payload;
    },

    // ----------------------------------------contactPage----------------------------------------------

    [contactPage.pending]: (state) => {
      state.loading = true;
    },

    [contactPage.fulfilled]: (state, action) => {
      state.contactData = action.payload;
      state.loading = false;
    },
    [contactPage.rejected]: (state, action) => {
      state.loading = false;
      state.contactData = action.payload;
    },

    // ----------------------------------------Products By Category Id----------------------------------------------

    [ProductsByCategoryId.pending]: (state) => {
      state.loading = true;
    },

    [ProductsByCategoryId.fulfilled]: (state, action) => {
      state.Products = action.payload;
      state.loading = false;
    },
    [ProductsByCategoryId.rejected]: (state, action) => {
      state.loading = false;
      state.Products = action.payload;
    },

    // ----------------------------------------getProductById----------------------------------------------

    [getProductById.pending]: (state) => {
      state.loading = true;
    },

    [getProductById.fulfilled]: (state, action) => {
      state.singleProduct = action.payload;
      state.loading = false;
    },
    [getProductById.rejected]: (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    },

    // ----------------------------------------get Other Pages----------------------------------------------

    [getOtherPages.pending]: (state) => {
      state.loading = true;
    },

    [getOtherPages.fulfilled]: (state, action) => {
      state.otherPages = action.payload;
      state.loading = false;
    },
    [getOtherPages.rejected]: (state, action) => {
      state.loading = false;
      state.otherPages = action.payload;
    },

    // ----------------------------------------get Other Pages----------------------------------------------

    [getSingleCustomPage.pending]: (state) => {
      state.loading = true;
    },

    [getSingleCustomPage.fulfilled]: (state, action) => {
      state.otherSinglePage = action.payload;
      state.loading = false;
    },
    [getSingleCustomPage.rejected]: (state, action) => {
      state.loading = false;
      state.otherSinglePage = action.payload;
    },

    // ----------------------------------------get Gallary Data----------------------------------------------

    [getGallaryData.pending]: (state) => {
      state.loading = true;
    },

    [getGallaryData.fulfilled]: (state, action) => {
      state.gallaryData = action.payload;
      state.loading = false;
    },
    [getGallaryData.rejected]: (state, action) => {
      state.loading = false;
      state.gallaryData = action.payload;
    },
  },
});

export default ApiSlice.reducer;
