import "./RegisterForm.css"
import {useSelector} from 'react-redux'
import WhiteOverlay from "../WhiteOverlay/WhiteOverlay";


export const RegisterForm = () => {

  const isVisible = useSelector((state) => state.registerFormToggler.isVisible)

  

  const handleFormClick = (e) =>{
    e.preventDefault();
    e.stopPropagation();          
}

const regForm = <WhiteOverlay>
<div className="reg-form" onClick={handleFormClick}>
<span>Здесь будет форма регистрации</span>
</div>
</WhiteOverlay>


  return isVisible===true ? regForm : null 
  
}


