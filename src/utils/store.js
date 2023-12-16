import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import searchGptSlice from "./searchGptSlice";


const store = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesSlice,
        gpt:searchGptSlice
    }
})

export default store