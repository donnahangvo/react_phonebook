// Store is a like a mini temporary in-the-middle database

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlice";

const store = configureStore({
    reducer,
    devTools: true,
});

export default store;