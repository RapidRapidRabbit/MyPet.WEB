import { useState, useEffect } from "react";
import "./HeaderComponent.css";
import { setCookie } from "../../services/GetSetCookieService";
import { CheckToken } from "../../services/ValidateTokenService";









const Header = () => {
    
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
    
    const handleMainPageLinkClick = (e) =>{
        e.preventDefault();
        window.location = '/'
    }  
    const handleSignInClick = (e) =>{
        e.preventDefault();
        window.location = '/signin'
    }
    const handleSignUpClick = (e) =>{
        e.preventDefault();
        window.location = '/signup'            
    }
    const handleLogOutClick = (e) =>{

        e.preventDefault();

        setCookie("jwttoken", "", {
            'max-age': -1
          })
        window.location = "/"  
    }
    const handleAddAdClick = (e) => {
      window.location = '/addadvertisement'
    }

    const LoginFalse = (<div className="">
    <button type="button" className="btn btn-outline-primary login-button" onClick={handleSignInClick}>Войти</button>
    <button type="button" className="btn btn-outline-primary login-button" onClick={handleSignUpClick}>Зарегистрироваться</button>      
    </div>);
    const LoginTrue = (<div className="">
    <button type="button" className="btn btn-outline-primary login-button" onClick={handleAddAdClick}>Добавить объявление</button>
    <button type="button" className="btn btn-outline-primary login-button" onClick={handleLogOutClick}>Выход</button>          
    </div>);

    

    

    return <header>
        <nav className="navbar navbar-dark bg-dark custom-navbar">
  <div className="container-fluid header-container">
  <button type="button" className="btn btn-outline-primary main-page-link" onClick={handleMainPageLinkClick}>My Pet</button>
    {isLogin}
  </div>  
</nav>    
    </header>    
}
export default Header
