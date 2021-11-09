import { useState, useEffect } from "react";
import "./HeaderComponent.css";
import { setCookie } from "../../services/GetSetCookieService";
import { CheckToken } from "../../services/ValidateTokenService";
import { useDispatch } from 'react-redux';
import {registerFormToggle} from '../../features/RegisterFormToggler/registerFormTogglerSlice'
import {loginFormToggle} from '../../features/LoginFormToggler/loginFormTogglerSlice'









const Header = () => {

    const dispatch = useDispatch();
    const[isLogin, setLogin] = useState("Loading...")    

    useEffect(()=>{
     CheckToken().then(data => {
      try{
      if(data.tokenValidation==="true"){               
        setLogin(LoginTrue)
      }
      else{
        setLogin(LoginFalse)        
      }
     }
     catch(err){
      console.log(err);
      setLogin(LoginFalse);
     }
    })                                                                
      },[])
     
    const handleSearchClick = (e) =>{
        e.preventDefault();                    
        //alert("Search");
        alert(document.cookie)
    }
    const handleSignInClick = (e) =>{
        e.preventDefault();
        dispatch(loginFormToggle({changeVisible: true}))
    }
    const handleSignUpClick = (e) =>{
        e.preventDefault();
        dispatch(registerFormToggle({changeVisible: true}))           
    }

    const handleLogOutClick = (e) =>{

        e.preventDefault();

        setCookie("jwttoken", "", {
            'max-age': -1
          })
        window.location = "/"  
    }

    const LoginFalse = (<div className="">
    <button type="button" className="btn btn-outline-primary login-button" onClick={handleSignInClick}>Войти</button>
    <button type="button" className="btn btn-outline-primary login-button" onClick={handleSignUpClick}>Зарегистрироваться</button>      
    </div>);
    const LoginTrue = (<div className="">
    <button type="button" className="btn btn-outline-primary login-button" onClick={handleLogOutClick}>Выход</button>          
    </div>);

    

    

    return <header>
        <nav className="navbar navbar-dark bg-dark custom-navbar">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2 custom-search-input" type="search" placeholder="Поиск по городам" aria-label="Search"></input>      
      <button className="btn btn-outline-success search-button" onClick={handleSearchClick} type="button">Поиск</button>            
    </form>      
    {isLogin}
  </div>  
</nav>    
    </header>    
}
export default Header
