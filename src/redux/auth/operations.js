import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken, setUserType } from "./slice";

axios.defaults.baseURL = "http://alb-1743355926.eu-north-1.elb.amazonaws.com/api";
const setAuthHeader = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const fetchSignup = createAsyncThunk(
  "auth/signup",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/v1/auth/register", data);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          message: error.response.data.message,
        });
      } else {
        return thunkAPI.rejectWithValue({
          status: 500,
          message: "Network error",
        });
      }
    }
  }
);

