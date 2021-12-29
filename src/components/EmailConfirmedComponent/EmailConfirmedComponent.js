import { Fragment, useEffect, useState } from "react";
import EmailConfirmService from "../../services/EmailConfirmService/EmailConfirmService";
import "./EmailConfirmedComponent.css";
import Loader from "../Loader/Loader";
import { NavLink, useNavigate } from "react-router-dom";



const EmailConfirmedComponent = (props) =>{

    const [isconfirmingOk, setConfirmingStatus] = useState(null);
    const [seconds, setSeconds] = useState(5);
    let navigate = useNavigate();   

/* eslint-disable */
    useEffect(()=>{       

        let normalizedToken = props.params.get("emailtoken").replace(/ /g,"+");        

        EmailConfirmService(props.params.get("userid"), normalizedToken).then(response => {
            
            if(response === null || response.statusCode >= 400 || response.confirmationResult === false ){                
                setConfirmingStatus(false);
            }else if (response.confirmationResult === true){ 

                setConfirmingStatus(true);                                            
            }           
        })

        let timer = setInterval(()=>{setSeconds(seconds => seconds - 1);}, 1000);
        return () => clearInterval(timer);
    },[])
   
    useEffect(()=>{
        if(seconds <= 0 && isconfirmingOk === true)
          navigate("../success", { replace: true });
    },[seconds])
/* eslint-enable */

    const errorContent = (<div className="alert alert-danger custom-alert" role="alert">
   Что-то пошло не так, ваша электронная почта не подтверждена.
</div>);
    const okContent = (<div className="alert alert-info custom-alert" role="alert">
  Спасибо за подтверждение электронной почты, вы будете перенаправлены на главную страницу через {seconds} секунд. <NavLink to="/mainpage">Главная страница</NavLink>
</div>);

    return <Fragment>
         {isconfirmingOk === null && <Loader setShow={true}/>}
         {isconfirmingOk === true && okContent}
         {isconfirmingOk === false && errorContent}          
    </Fragment>
}

export default EmailConfirmedComponent;