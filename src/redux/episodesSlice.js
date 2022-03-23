import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllEpisodes = createAsyncThunk("episodes/fetchAll", async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/episodes`
  );
  return response.data;
});

export const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchAllEpisodes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchAllEpisodes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    },
    [fetchAllEpisodes.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});

export const episodesSelector = (state) => state.episodes.items;
export const episodesStatusSelector = (state) => state.episodes.status;
export const episodesErrorSelector = (state) => state.episodes.error;

export default episodesSlice.reducer;