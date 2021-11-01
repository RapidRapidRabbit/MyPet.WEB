import React, { useState, useEffect } from "react";
import "./HeaderComponent.css";
import { setCookie } from "../../services/GetSetCookieService";
import { CheckToken } from "../../services/CheckLoginService";


const Header = () => {

    const[isLogin, setLogin] = useState(false)

    useEffect(()=>{
       setLogin(CheckToken())
       console.log(CheckToken());                           
      },[])
    
    const handleSearchClick = (e) =>{
        e.preventDefault();                    
        //alert("Search");
        alert(document.cookie)
    }
    const handleSignInClick = (e) =>{
        e.preventDefault();
        alert("Login");
    }
    const handleSignUpClick = (e) =>{
        e.preventDefault();
        alert("Register");
    }

    const handleLogOutClick = (e) =>{

        e.preventDefault();

        setCookie("jwtToken", "", {
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
    {isLogin ? LoginTrue : LoginFalse}
  </div> 
  
</nav>    
    </header>    
}
export default Header
