import { createSlice } from "@reduxjs/toolkit";


const searchGptSlice = createSlice({
    name:'searchGPT',
    initialState:{
        gptPage:false,
        moviesNames:null,
        moviesList:null
    },
    reducers:{
        showGptPage:(state) =>{
            state.gptPage = true
        },
        closeGptPage:(state) => {
            state.gptPage = false
        },
        addMovieDetails:(state,action)=>{
            const {moviesNames, moviesList} = action.payload;
            state.moviesNames = moviesNames;
            state.moviesList = moviesList
        }
    }
})

export const { showGptPage,closeGptPage,addMovieDetails } = searchGptSlice.actions
export default searchGptSlice.reducer