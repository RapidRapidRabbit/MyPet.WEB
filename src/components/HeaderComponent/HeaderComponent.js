import { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderComponent.css";
import { setCookie } from "../../services/GetSetCookieService";
import { CheckToken } from "../../services/ValidateTokenService";
import IsEmailConfirmedHeadComponent from "../IsEmailConfirmedHeadComponent/IsEmailConfirmedHeadComponent";









const Header = () => {
    
    
    const[isLogin, setLogin] = useState(false); 
    const[isEmailConfirmed, setisEmailConfirmed] = useState(false);    

    useEffect(()=>{
       
     CheckToken().then(data => {
      try{
      if(JSON.parse(data.tokenValidation) === true){               
        setLogin(true); 
        setisEmailConfirmed(JSON.parse(data.isEmailConfirmed));        
      }
      else{
        setLogin(false)       
      }
     }
     catch(err){
      console.log(err);
      setLogin(false); 
     }
    })                                                                
      },[])    
    
    
    const handleMainPageLinkClick = (e) =>{
        e.preventDefault();
        window.location = "/";
        
    } 
    
    const handleLogOutClick = (e) =>{

        e.preventDefault();

        setCookie("jwttoken", "", {
            'max-age': -1
          });
        window.location = "/";             
    }

                 
    return <header> 
        <nav className="navbar navbar-dark bg-dark custom-navbar">
  <div className="container-fluid">
  <div className="left-header-block">
    <img className="logo-img" alt=":("></img>  
  <button type="button" className="btn btn-outline-primary main-page-link" onClick={handleMainPageLinkClick}>My Pet App</button>
  </div>  
  <div className="is-sign-in-block">  
    {isLogin === true && 
      <Fragment>
    <div className="email-confirm-block"><IsEmailConfirmedHeadComponent isConfirmed = {isEmailConfirmed}/></div>
    <NavLink to="/addadvertisement" className="btn btn-outline-primary login-button">Добавить объявление</NavLink>
    <NavLink to="/myads" className="btn btn-outline-primary login-button">Мои объявления</NavLink>     
    <button type="button" className="btn btn-outline-primary login-button" onClick={handleLogOutClick}>Выход</button>          
    </Fragment>
    }
                                  
    {isLogin === false && <Fragment> 
      <NavLink to="/signin" className="btn btn-outline-primary login-button">Войти</NavLink>
      <NavLink to="/signup" className="btn btn-outline-primary login-button">Зарегистрироваться</NavLink>     
     </Fragment>
    }
  </div>     
  </div>  
</nav>    
    </header>    
}
export default Header
