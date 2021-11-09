import React from "react";
import "./WhiteOverlay.css";
import { useDispatch } from 'react-redux';
import {registerFormToggle} from '../../features/RegisterFormToggler/registerFormTogglerSlice'
import {loginFormToggle} from '../../features/LoginFormToggler/loginFormTogglerSlice'



const WhiteOverlay = (props) =>{
       
    const dispatch = useDispatch();
    const [show, toggleOverlayShow] = React.useState(true);
    
    

    const handleOverlayClick = (e) =>{
        e.preventDefault();        
        toggleOverlayShow(false);
        dispatch(registerFormToggle({changeVisible: false}))
        dispatch(loginFormToggle({changeVisible: false}))
    }


    const overlay = <div id="white-overlay" onClick={handleOverlayClick}>
    {props.children}
    </div>

    return show===true ? overlay : null;
    
}
export default WhiteOverlay;




