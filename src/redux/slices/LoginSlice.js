import { createSlice } from "@reduxjs/toolkit"

const initialState = {login : false}



const loginSlice= createSlice ({

    name: "stateLogin",
    initialState,
    reducers: {
        setLogin(state, action){
            const {login} = action.payload
            state.login = login
        }
    }
})

export const {setLogin} = loginSlice.actions
export default loginSlice.reducer