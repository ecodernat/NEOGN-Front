import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice ({

    name: "filter",
    initialState : {
        filterResult: [],

    },
    reducers: {
        setFilter(state, action){
            state.filterResult = action.payload
        }
    }
})

export const {setFilter} = filterSlice.actions
export default filterSlice.reducer