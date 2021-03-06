import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import "./SendMessageFormComponent.css";
import useAuth from "../../../features/Hooks/useAuth";
import SendMessageService from "../../../services/Http/SendMessageService/SendMessageService";
import { NavLink } from "react-router-dom";

const SendMessageFormComponent = ({adItem}) =>{

    const [feedbackMessage, setFeedbackMessage] = useState(null)
    const [isSended, setIsSended] = useState(false);
    const auth = useAuth();
    
    const {
    register,
    handleSubmit, 
    formState: { errors },   
  } = useForm(); 
  

  const onSubmit = (data) => {

    const backendMessageModel = {
            touserid: adItem.userId,            
            message: data.Message,
        };      
     
       SendMessageService(backendMessageModel)
       .then(response => {
         if(response.status >= 400){
            setFeedbackMessage(failureFeedbackMessage);
         }else{
           setFeedbackMessage(successFeedbackMessage)
         }
       })
       .catch(error =>{
          setFeedbackMessage(failureFeedbackMessage);
          console.error(error);
       })
       .finally(()=>{
          setIsSended(true);
       })    
   }
   
 const successFeedbackMessage = <div className="alert alert-success" role="alert">
  Cпасибо, ваше сообщение было отправлено, теперь можно открыть чат с пользователем из шапки сайта.
</div>
const failureFeedbackMessage = <div className="alert alert-danger" role="alert">
  Что-то пошло не так, возможно, вы пытаетесь отправить сообщение самому себе.
</div>


    return <Fragment>
    
       {!isSended && (
         auth.isAuthed ? (       
           <form onSubmit={handleSubmit(onSubmit)} noValidate>
           <span className="send-message-form-header">Вы можете отправить сообщение пользователю '{adItem.userName}'</span>        
      <textarea className={"form-control message-input " + (errors.Message  ? "is-invalid" : '')} rows="3" placeholder="Введите сообщение" autoComplete="off"
      {...register('Message', {
            required: 'Обязательное поле',
            minLength: {
              value: 3,
              message: 'Минимальная длина - 3 символа',
            },
            maxLength:{
                value: 300,
                message: 'Максимальная длина - 300 символов',
            },
          })}
      ></textarea>
      <div className="invalid-feedback">
      {errors.Message && errors.Message.message}<br/>
      </div>
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
          ) : (
           <p className="not-found-string"><NavLink to="/signin">Войдите</NavLink> или <NavLink to="/signup">Зарегистрируйтесь</NavLink> чтобы отправлять сообщения.</p>
          )
       )}

    {feedbackMessage}  
    </Fragment>
}
export default SendMessageFormComponent;