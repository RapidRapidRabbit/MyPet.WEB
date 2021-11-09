import "./LoginForm.css"
import {useSelector} from 'react-redux'
import WhiteOverlay from "../WhiteOverlay/WhiteOverlay";


export const LoginForm = () => {

  const isVisible = useSelector((state) => state.loginFormToggler.isVisible)

  

  const handleFormClick = (e) =>{    
    e.stopPropagation();          
}

const loginForm = <WhiteOverlay>
<div className="login-form" onClick={handleFormClick}>
<span>Здесь будет форма для логина</span>
</div>
</WhiteOverlay>


  return isVisible===true ? loginForm : null 
  
}


