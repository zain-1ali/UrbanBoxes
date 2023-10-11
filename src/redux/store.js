import { configureStore } from "@reduxjs/toolkit";
import productpropertyHandeler from "./productpropertySlice";
import siteDetails from "./SettingsApiSlice";
import ApiSlice from "./ApiSlice";
// import profileEditHandeler from "./Profileeditslice";
// import modalHandeler from "./Modalslice";
// import singleLinkHandeler from "./Singlelinkslice";
// import userInfoHandeler from "./UserinfoSlice";
// import authHandeler from "./Authslice";
// import adminHandeler from "./Adminslice";
// import LinkHandeler from "./LinksSlice";

export const store = configureStore({
  reducer: {
    productpropertyHandeler: productpropertyHandeler,
    siteDetails: siteDetails,
    ApiSlice: ApiSlice,
  },
});
