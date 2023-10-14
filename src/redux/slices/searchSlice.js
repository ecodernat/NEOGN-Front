import { createSlice} from "@reduxjs/toolkit"

const initialState ={
    searchTerm: "",
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        setSearchTerm: (state, action) =>{
            state.searchTerm = action.payload
        }
    }
})
export const { searchTerm} = searchSlice.actions;

export default searchSlice.reducer;