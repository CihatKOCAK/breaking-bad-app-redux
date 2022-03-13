import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllQuotes = createAsyncThunk("quotes/fetchAll", async () => {
  const response = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`
  );
  return response.data;
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchAllQuotes.fulfilled]: (state, action) => {
      state.items = action.payload;
        state.status = 'succeeded';
    },
    [fetchAllQuotes.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },
    [fetchAllQuotes.pending]: (state, action) => {
      state.status = 'loading';
    },
  },
});

export const quotesSelector = (state) => state.quotes.items;
export const quotesStatusSelector = (state) => state.quotes.status;
export const quotesErrorSelector = (state) => state.quotes.error;


export default quotesSlice.reducer;
