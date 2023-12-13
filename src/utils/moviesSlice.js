import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'Movies',
    initialState:{
        nowPlayingMovies:[],
        mainMovieDetail:[],
        popularMovies:[],
        topRated:[],
        upcomingMovies:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=> {
            state.nowPlayingMovies = action.payload
        },
        addMainVideoDetail:(state,action) => {
            state.mainMovieDetail = action.payload
        },
        addPopularMovies:(state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action) => {
            state.topRated = action.payload
        },
        addUpcomingMovies:(state,action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies,addMainVideoDetail, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions
export default moviesSlice.reducer