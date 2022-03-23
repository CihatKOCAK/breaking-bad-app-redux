import { configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./characterSlice";
import { quotesSlice } from "./quotesSlice";
import { deathsSlice } from "./deathsSlice";
export const store = configureStore({
    reducer:{
        character: characterSlice.reducer,
        quotes: quotesSlice.reducer,
        deaths: deathsSlice.reducer,
    },
})