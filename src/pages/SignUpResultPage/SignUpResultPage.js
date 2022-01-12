import "./SignUpResultPage.css";
import { Fragment, useEffect, useState } from "react";
import Header from "../../components/HeaderComponent/HeaderComponent";
import { useSearchParams, useNavigate, NavLink } from "react-router-dom";

const SignUpResultPage = () =>{

    const [searchParams] = useSearchParams();        
    const result = (searchParams.get("result") === 'true');
   // const emailResult = (searchParams.get("emailsendingresult") === 'true');
    const [seconds, setSeconds] = useState(20);
    const navigate = useNavigate();

    useEffect(()=>{
        const timer = setInterval(()=>{setSeconds(seconds => seconds - 1);}, 1000);
        return () => clearInterval(timer);
    },[]);

    useEffect(()=>{
        if(seconds <= 0 && result === true)
          navigate("/signin");         
    },[seconds, navigate, result]);

     const errorContent = (<div className="alert alert-danger custom-alert">
   Что-то пошло не так, при регистрации произошла ошибка. Пожалуйста, попробуйте позже.
</div>);
    const okContent = (<div className="alert alert-info custom-alert">
  Спасибо за регистрацию на сайте, на ваш имейл было отправлено сообщение для подтверждения электронной почты. Вы будете перенаправлены на страницу входа через
   <span className="seconds-span"> {seconds} </span>секунд. <NavLink to="/signin">Страница входа</NavLink>
</div>);


    return <Fragment>
    <Header/>
    {result === true && okContent}
    {result === false && errorContent}
    </Fragment>
    

}

export default SignUpResultPage;