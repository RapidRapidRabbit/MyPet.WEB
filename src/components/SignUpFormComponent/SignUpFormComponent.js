import "./SignUpFormComponent.css";
import "../../App.css";
import { useForm } from 'react-hook-form';
import SignUpService from "../../services/SignUp/SignUpService";
import { useState } from 'react';
import { setCookie } from "../../services/GetSetCookieService";
//import { GetServerErrors } from "../../services/ServerValidationService/ServerValidationService";





const SignUpFormComponent = () => {

  const [serverErrors, setServerError] = useState([]);

  const {
    register,
    handleSubmit, 
    formState: { errors },   
    getValues,  
  } = useForm();

  const onSubmit = (formData) => {
    
    

     SignUpService(formData).then(data => {       
      
      try{
        
        if(data.statusCode === 400 ){ 

         setServerError(data.errors);         
          return;
        }        
          setCookie("jwttoken", data.jwttoken);
          window.location = '/';
      }
      catch{                
          setServerError(["Something went wrong"]);      
      }    
    })                                        
  
    
   
  }  
 

const SignUpForm = 
<div className="form-container" >
<div className="form-block">
<div className="errors-block">
{serverErrors && serverErrors.length > 0 && serverErrors.map((item, index) => 
<span className="error-message" key={index} >{item}<br/></span>)}
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
    <div id="emailHelp" className="form-text">Любой, просто валидный</div>     
  </div>
  <div className="mb-3">
    <label htmlFor="InputNickName" className="form-label">Имя на сайте</label>
    <input type="text" className={"form-control " + (errors.UserName  ? "is-invalid" : '')}  id="InputNickname" placeholder="nickname" 
      {...register('UserName', {
            required: 'Обязательное поле',
            maxLength: {
              value: 10,
              message: 'Максимальная длина - 10 символов'
            },
          })}
    />
    <div className="invalid-feedback">    
    {errors.UserName && errors.UserName.message}
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
    <div id="passwordHelp" className="form-text">Любые 3 символа</div>    
  </div>
  <div className="mb-3">
    <label htmlFor="InputPasswordConfirm" className="form-label">Подтвердите пароль</label>
    <input type="password" className={"form-control " + (errors.passwordConfirm  ? "is-invalid" : '')} id="InputPasswordConfirm" placeholder="123" 
      {...register('passwordConfirm', {
            required: 'Обязательное поле',
            minLength: {
              value: 3,
              message: 'Минимальная длина - 3 символа',              
            },
            validate: {              
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || 'Не совпадает с введенным паролем';
              },
            },
          })}
    />
    <div className="invalid-feedback">
    {errors.passwordConfirm && errors.passwordConfirm.message}
    </div>   
  </div>    
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>




  return SignUpForm; 
  
}


export default SignUpFormComponent;
