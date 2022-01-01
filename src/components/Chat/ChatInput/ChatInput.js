import { useState } from 'react';
import './ChatInput.css';

const ChatInput = (props) => {

  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    
    if(message.length > 0){
      setMessage('');   
      props.sendMessage(message)
    }
      
  }
  
  const onMessageUpdate = (e) => {
    setMessage(e.target.value)
  }

  return (
   
    <form className="chat-form" onSubmit={onSubmit}>   
      
      <input className="form-control chat-input" value={message} onChange={onMessageUpdate} placeholder="Введите сообщение" autoComplete="off"/>
      <button type="submit" className="btn btn-primary">Отправить</button>
      
    </form>
   
  )
}
export default ChatInput
