import { createSlice } from "@reduxjs/toolkit";
import {
  createAddress,
  createCustomer,
  getAddress,
  getCustomerProfile,
  signIn,
  signUp,
} from "../Action/userAction";
import { toast } from "react-toastify";

const UserReducer = createSlice({
  name: "User",
  initialState: {
    user: [],
    address: [],
    allAddress: [],
    profile: [],
    loader: false,
    error: "",
    success: "",
  },
  reducers: {},
  extraReducers: {
    /* -------------------------- signin user -------------------------- */
    [signIn.pending]: (state, action) => {
      state.loader = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.loader = false;
      // state.user = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    [signIn.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
      toast.error(action.payload.message);
    },
    // get all address
    [getAddress.pending]: (state, action) => {
      state.loader = true;
    },
    [getAddress.fulfilled]: (state, action) => {
      state.loader = false;
      state.allAddress = action.payload;
    },
    [getAddress.rejected]: (state, action) => {
      state.loader = false;
    },
    /* -------------------------- signup user -------------------------- */
    [signUp.pending]: (state, action) => {
      state.loader = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload;
      state.success = action.payload.message;
    },
    [signUp.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
    // createCustomer
    [createCustomer.pending]: (state, action) => {
      state.loader = true;
    },
    [createCustomer.fulfilled]: (state, action) => {
      state.loader = false;
      state.user = action.payload;
      state.success = action.payload.message;
    },
    [createCustomer.rejected]: (state, action) => {
      state.loader = false;
      // state.error = action.payload.message;
    },
    // createAddress
    [createAddress.pending]: (state, action) => {
      state.loader = true;
    },
    [createAddress.fulfilled]: (state, action) => {
      state.loader = false;
      state.address = action.payload;
      state.success = action.payload.message;
    },
    [createAddress.rejected]: (state, action) => {
      state.loader = false;
      state.error = action.payload.message;
    },
    // getCustomerProfile
    [getCustomerProfile.pending]: (state, action) => {
      state.loader = true;
    },
    [getCustomerProfile.fulfilled]: (state, action) => {
      state.loader = false;
      state.profile = action.payload;
    },
    [getCustomerProfile.rejected]: (state, action) => {
      state.loader = false;
    },
  },
});
// export
// export const {} = UserReducer.actions;

// export default
export default UserReducer.reducer;
