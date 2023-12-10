import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'Movies',
    initialState:{
        nowPlayingMovies:[],
        mainMovieDetail:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=> {
            state.nowPlayingMovies = action.payload
        },
        addMainVideoDetail:(state,action) => {
            state.mainMovieDetail = action.payload
        }
    }
})

export const { addNowPlayingMovies,addMainVideoDetail } = moviesSlice.actions
export default moviesSlice.reducer