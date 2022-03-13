import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;

export const fetchCharacters = createAsyncThunk(
  "character/fetchCharacters",
  async (page) => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}&offset=${page * char_limit}`
    );
    return response.data;
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    characters: [],
    isLoading: false,
    page: 0,
    hasNextPage: true,
  },
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.characters = [...state.characters, ...action.payload];
      state.isLoading = false;
      state.page += 1;

      if(action.payload.length < char_limit) {
        state.hasNextPage = false;
      }
    },
    [fetchCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default characterSlice.reducer;
