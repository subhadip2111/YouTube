import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        
    },
    reducers: {
        cacheResults: (state, action) => {
            //for some reason  ... distructure was not working 
            state = Object.assign(state,action.payload)
        }
    }
})
export const {cacheResults}=searchSlice.actions

export default searchSlice.reducer





/**
 * define Our cache
 * [
 * 
 * 
 * 
 * ]
 * 
 * here i am not doing [] for initial 
 * 
 * 
 * 
*/