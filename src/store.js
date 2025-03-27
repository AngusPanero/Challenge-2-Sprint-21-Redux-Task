import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";

const store = configureStore({
    reducer: {
        todosSelector: todosSlice, // todos es un nombre random que de ahí pasa el selector
    },
});

export default store;