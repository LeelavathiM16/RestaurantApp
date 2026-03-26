import type { AuthState, formDataType } from "@/type";
import Api from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData: formDataType, thunkAPI) => {
    let response;
    try {
      response = await Api.post("/auth/register", formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return thunkAPI.rejectWithValue(error.message || "Register error");
    }
  },
);

export const LoginUser = createAsyncThunk(
  "/auth/login",
  async (formData: formDataType, thunkAPI) => {
    let response;
    try {
      response = await Api.post("/auth/login", formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
  return thunkAPI.rejectWithValue("Login failed");
    }
  },
);

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
      state.isAuthenticated = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state,action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload as string;
    });
  },
});

export default AuthSlice.reducer;
