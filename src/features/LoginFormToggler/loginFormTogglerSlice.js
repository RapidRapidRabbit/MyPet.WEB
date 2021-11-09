import {createSlice} from '@reduxjs/toolkit'

export const loginFormTogglerSlice = createSlice({
    name: 'loginFormToggler',
    initialState: {
        isVisible: false,
    },
    reducers:{
        loginFormToggle: (state, action) => {
            console.log("LOGIN form state visible was: " + state.isVisible)            
            state.isVisible = action.payload.changeVisible;            
            console.log("LOGIN form state visible: " + state.isVisible)
        },
    },
})

export const {loginFormToggle} = loginFormTogglerSlice.actions

export default loginFormTogglerSlice.reducer