import "./SignInFormComponent.css";
import "../../App.css";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SignInService from "../../services/Http/SignInService/SignInService";
import useAuth from "../../features/Hooks/useAuth";
import { GetServerErrors } from "../../services/ServerValidationService/ServerValidationService";





const SignInFormComponent = () => {

  const [serverErrors, setServerError] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const navigate = useNavigate();
  const auth = useAuth();
  

  const {
    register,
    handleSubmit, 
    formState: { errors },   
  } = useForm();

  const onSubmit = (formData) => {
    
    setIsLoaded(false);

    SignInService(formData)
    .then(data => {              
      if(data.status >= 400){         
        setServerError(GetServerErrors(data.errors));
        setIsLoaded(true);
        return;
      }
     auth.logIn(data);  
     navigate('/');     
    })
    .catch(error =>{
      setServerError(["Что-то пошло не так, попробуйте позже."])
      console.error(error)
      setIsLoaded(true);
    })        
  }


  return <div className="form-container" >
<div className="form-block">
<div className="errors-block">
{serverErrors && serverErrors.length > 0 && serverErrors.map((item, index) => 
<span className="error-message" key={index} >{item} <br/></span>)}
</div> 
<form onSubmit={handleSubmit(onSubmit)} noValidate>
  <div className="mb-3">
    <label htmlFor="InputEmail1" className="form-label">Email адрес</label>
    <input type="email" className={"form-control " + (errors.email  ? "is-invalid" : '')}  id="InputEmail1" placeholder="example@mail.ru" 
      {...register('email', {
            required: 'Обязательное поле',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Не валидный email',
            },
          })}
    />
    <div className="invalid-feedback">    
    {errors.email && errors.email.message}
    </div>     
  </div>
  <div className="mb-3">
    <label htmlFor="InputPassword1" className="form-label">Пароль</label>
    <input type="password" className={"form-control " + (errors.password  ? "is-invalid" : '')} id="InputPassword1" placeholder="123" 
      {...register('password', {
            required: 'Обязательное поле',
            minLength: {
              value: 3,
              message: 'Минимальная длина - 3 символа',
            },
          })}
    />
    <div className="invalid-feedback">
    {errors.password && errors.password.message}
    </div>     
  </div>  
  <button type="submit" className="btn btn-primary">Войти {!isLoaded && <span className="spinner-border spinner-border-sm"></span>}</button>
</form>
</div>
</div> 
  
}


export default SignInFormComponent;
