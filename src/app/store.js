import { configureStore } from '@reduxjs/toolkit'
import registerFormTogglerReducer from '../features/RegisterFormToggler/registerFormTogglerSlice'
import loginFormTogglerReducer from '../features/LoginFormToggler/loginFormTogglerSlice'


export default configureStore({    
    reducer:{
        registerFormToggler: registerFormTogglerReducer,
        loginFormToggler: loginFormTogglerReducer,
    },
})