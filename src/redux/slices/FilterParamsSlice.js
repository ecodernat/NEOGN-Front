import { createSlice } from "@reduxjs/toolkit";



const filterParamsSlice= createSlice ({
    name: 'filterParams',
    initialState:{
        category : '',
        order:'',
        minPrice: null,
        maxPrice: null,
        page:null,
        totalPages:null,


    },
    reducers:{
        setCategory(state, action){
            const {category} = action.payload
            state.category = category
        },
        setPriceRange: (state, action) =>{
            state.minPrice = action.payload.min
            state.maxPrice = action.payload.max
        },
        setOrder: (state,action)=>{
            state.order = action.payload.order
        },
        setPage: (state,action)=>{
            state.page = action.payload.page
        },
        setTotalPages: (state,action)=>{
            state.totalPages = action.payload.totalPages
        }

    },
});

export const {setCategory,setOrder,setPage,setPriceRange, setTotalPages} = filterParamsSlice.actions;
export default filterParamsSlice.reducer;