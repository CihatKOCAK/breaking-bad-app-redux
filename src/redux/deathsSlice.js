import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllDeaths = createAsyncThunk("deaths/fetchAll", async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/deaths`
  );
  return response.data;
});

export const deathsSlice = createSlice({
  name: "deaths",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchAllDeaths.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchAllDeaths.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
    [fetchAllDeaths.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});

export const deathsSelector = (state) => state.deaths.items;
export const deathsStatusSelector = (state) => state.deaths.status;
export const deathsErrorSelector = (state) => state.deaths.error;

export default deathsSlice.reducer;