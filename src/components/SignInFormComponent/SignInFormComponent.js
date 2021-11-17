import "./SignInFormComponent.css";
import "../../App.css";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { setCookie } from "../../services/GetSetCookieService";
import  SignInService  from "../../services/SignInService/SignInService";
import { GetServerErrors } from "../../services/ServerValidationService/ServerValidationService";





const SignInFormComponent = () => {

  const [serverErrors, setServerError] = useState([]);

  const {
    register,
    handleSubmit, 
    formState: { errors },   
  } = useForm();

  const onSubmit = (formData) => {    

     SignInService(formData).then(data => {      

      try{

      if(data.status === 400){        
        let errorsArr = GetServerErrors(data.errors);
        setServerError(errorsArr);
        return;
      }                 
      setCookie("jwttoken", data.jwttoken);
      window.location = '/'; 
    }
    catch{
      setServerError(["Something went wrong"])
    }
    })                          
  }
   
  
 
 

const SignInForm = 
<div className="form-container" >
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
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>




  return SignInForm; 
  
}


export default SignInFormComponent;
