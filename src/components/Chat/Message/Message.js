import { Fragment } from "react";
import './Message.css';

const Message = (props) => {

    const dateTime = new Date(props.item.sendingDate)
    let day = dateTime.getDate().toString()
    let month = dateTime.getMonth() + 1;    
    const time = dateTime.toLocaleTimeString('ru')

    day = day.length === 1 ? '0' + day : day;
    month = month.toString().length === 1 ? '0' + month.toString() : month;
     

    return  <Fragment>
    <div>
    <span className="date-string">[{`${day}.${month} ${time}`}]</span> <span className="user-name-string">{props.item.fromUserName}:</span> <span className="message-string">{props.item.text}</span><br/>
    </div>
    </Fragment>
}

export default Message;