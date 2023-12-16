import { createSlice } from "@reduxjs/toolkit";


const searchGptSlice = createSlice({
    name:'searchGPT',
    initialState:{
        gptPage:false,
    },
    reducers:{
        showGptPage:(state) =>{
            state.gptPage = true
        },
        closeGptPage:(state) => {
            state.gptPage = false
        }
    }
})

export const { showGptPage,closeGptPage } = searchGptSlice.actions
export default searchGptSlice.reducer