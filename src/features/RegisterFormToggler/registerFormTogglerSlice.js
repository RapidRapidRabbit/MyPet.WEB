import {createSlice} from '@reduxjs/toolkit'

export const registerFormTogglerSlice = createSlice({
    name: 'registerFormToggler',
    initialState: {
        isVisible: false,
    },
    reducers:{
        registerFormToggle: (state, action) => {
            console.log("reg form state visible was: " + state.isVisible)            
            state.isVisible = action.payload.changeVisible;            
            console.log("reg form state visible: " + state.isVisible)
        },
    },
})

export const {registerFormToggle} = registerFormTogglerSlice.actions

export default registerFormTogglerSlice.reducer