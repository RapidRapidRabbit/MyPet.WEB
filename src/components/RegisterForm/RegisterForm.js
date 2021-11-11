import "./RegisterForm.css"
import {useSelector} from 'react-redux'
import { useForm } from 'react-hook-form';
import WhiteOverlay from "../WhiteOverlay/WhiteOverlay";



const RegisterForm = () => {

  const isVisible = useSelector((state) => state.registerFormToggler.isVisible)

  const {
    register,
    handleSubmit, 
    formState: { errors },
    setError,
    getValues,  
  } = useForm();

  const onSubmit = (data) => {
    alert();
    console.log(JSON.stringify(data));
   // setError('firstName', {message: "some message"})
  }
  const handleFormClick = (e) =>{         
    e.stopPropagation();
    console.log(errors.email)              
}
 

const regForm = <WhiteOverlay>
<div className="registration-form" onClick={handleFormClick}>
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
</WhiteOverlay>


  return isVisible===true ? regForm : null 
  
}


export default RegisterForm;
