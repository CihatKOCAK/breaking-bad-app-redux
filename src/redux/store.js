import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./characterSlice";
import { quotesSlice } from "./quotesSlice";
export const store = configureStore({
    reducer:{
        character: characterSlice.reducer,
        quotes: quotesSlice.reducer
    },
})