import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import "./SendMessageFormComponent.css";
import useAuth from "../../../features/Hooks/useAuth";
import SendMessageService from "../../../services/Http/SendMessageService/SendMessageService";

const SendMessageFormComponent = (props) =>{

    const [feedbackMessage, setFeedbackMessage] = useState(null)
    const [isSended, setIsSended] = useState(false);
    const auth = useAuth();
    
    const {
    register,
    handleSubmit, 
    formState: { errors },   
  } = useForm(); 
  

  const onSubmit = async (data) => {

    const backendMessageModel = {
            touserid: props.adOwnerId,            
            message: data.Message,
        };
      
      try {
       await SendMessageService(backendMessageModel).then(response => {
         if(response.status >= 400){
            setFeedbackMessage(failureFeedbackMessage);
         }else{
           setFeedbackMessage(successFeedbackMessage)
         }
       })  
      } catch (error) {
        setFeedbackMessage(failureFeedbackMessage) 
      }
      setIsSended(true);
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
           <p className="not-found-string">Войдите или зарегистрируйстесь чтобы отправлять сообщения</p>
          )
       )}

    {feedbackMessage}  
    </Fragment>
}
export default SendMessageFormComponent;