import { Fragment } from "react";
import './Message.css';

const Message = (props) => {

    const dateTime = new Date(props.item.sendingDate)
    const day = dateTime.getDate()
    const month = dateTime.getMonth() + 1;
    const time = dateTime.toLocaleTimeString('ru')

    return  <Fragment>
    <span className="date-string">[{`${day}.${month} ${time}`}]</span> <span className="user-name-string">{props.item.fromUserName}:</span> <span className="message-string">{props.item.text}</span><br/>
    </Fragment>
}

export default Message;