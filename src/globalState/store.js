import { configureStore } from "@reduxjs/toolkit";
import showMoreSlice from "./reducers"

export const store = configureStore({
    reducer: {
        app: showMoreSlice,
    },
});