import React, { useEffect } from "react";
import "./WhiteOverlay.css";



const WhiteOverlay = (props) =>{
       
    
    const [show, toggleOverlayShow] = React.useState(props.setShow);
    
    useEffect(() =>{
        toggleOverlayShow(props.setShow)
    },[props.setShow])

    const handleOverlayClick = (e) =>{
        e.preventDefault();        
        toggleOverlayShow(false);
        props.changeParentState();        
    }


    const overlay = <div id="white-overlay" onClick={handleOverlayClick}>
    {props.children}
    </div>

    return show===true ? overlay : null;
    
}
export default WhiteOverlay;




