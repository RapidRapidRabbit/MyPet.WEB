import { useState } from 'react'

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
    <form onSubmit={onSubmit}>   
      
      <input id="message" name="message" value={message} onChange={onMessageUpdate} placeholder="message"/>
      <button type="submit">Submit</button>
      
    </form>
  )
}
export default ChatInput
