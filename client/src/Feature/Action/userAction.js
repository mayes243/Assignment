import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// user sign up
export const signUp = createAsyncThunk(
  "user/signUp",
  async (datas, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/user/signup`, datas);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// user sign in
export const signIn = createAsyncThunk(
  "user/signin",
  async (datas, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/user/signin`, datas);
      if (response.status === 200) {
        datas.navigate("/");
        return response.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// create a address
export const createAddress = createAsyncThunk(
  "user/createAddress",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/address/create`, data);
      data.toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get all address
export const getAddress = createAsyncThunk("user/getAddress", async () => {
  try {
    const response = await axios.get(`/address/view`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
});

// create a customer
export const createCustomer = createAsyncThunk(
  "user/createCustomer",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/customer/create`, data);
      data.toast.success(response.data.message);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// get all address
export const getCustomerProfile = createAsyncThunk(
  "user/getCustomerProfile",
  async () => {
    try {
      const response = await axios.get(`/customer/profile`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
);
