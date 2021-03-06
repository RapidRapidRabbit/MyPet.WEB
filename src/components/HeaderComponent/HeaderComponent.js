import { useState, useEffect, Fragment } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./HeaderComponent.css";
import IsEmailConfirmedHeadComponent from "../IsEmailConfirmedHeadComponent/IsEmailConfirmedHeadComponent";
import useAuth from "../../features/Hooks/useAuth";


const Header = () => {
    
    
    const[isLogin, setLogin] = useState(false);     
    const[isEmailConfirmed, setisEmailConfirmed] = useState(false);  
    const auth = useAuth();
    const navigate = useNavigate();
      
 
    useEffect(()=>{ 
    
    if(auth.isAuthed === true){      
      setLogin(true);
      setisEmailConfirmed(JSON.parse(auth.userData.isEmailConfirmed));

    }else{
      setLogin(false);
    }
    // eslint-disable-next-line
      },[auth.isAuthed, auth.isAdmin])   
    
    
    // const handleMainPageLinkClick = (e) =>{
    //     e.preventDefault();
    //     window.location = "/";        
    // } 
    
    const handleLogOutClick = (e) =>{
        e.preventDefault();
        auth.logOut();
        setLogin(false);
        navigate('/');                  
    }

                 
    return <header> 
        <nav className="navbar navbar-dark bg-dark custom-navbar">
  <div className="container-fluid">
  <div className="left-header-block">
    <img className="logo-img" alt=":("></img>  
  {/* <button type="button" className="btn btn-outline-primary main-page-link" onClick={handleMainPageLinkClick}>My Pet App</button> */}
  <Link to="/" className="btn btn-outline-primary main-page-link">My Pet App</Link>
  </div>  
  <div className="is-sign-in-block">  
    {isLogin === true && 
      <Fragment>
    <div className="email-confirm-block"><IsEmailConfirmedHeadComponent isConfirmed = {isEmailConfirmed}/></div>
    {auth.isAdmin === true && <NavLink to="/moderation" className="btn btn-outline-warning login-button">Модерация</NavLink>}
    <NavLink to="/chat" className="btn btn-outline-primary login-button">Сообщения</NavLink>
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
