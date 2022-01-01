import { Fragment, useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import GetChatMessagesById from '../../../services/ChatServices/GetChatMessagesById/GetChatMessagesById';
import ChatInput from '../ChatInput/ChatInput';
import Message from '../Message/Message';
import './ChatHistoryComponent.css';
import { getCookie } from '../../../services/GetSetCookieService';
import { myPetApi } from '../../../services/Hosts';

const ChatHistoryComponent = (props) => {

    const [messages, setMessages] = useState([]);
    const [connection, setConnection] = useState(null);

    useEffect(() => { 
        const newConnection = new HubConnectionBuilder()
            .withUrl(`${myPetApi}/hubs/chat`, {accessTokenFactory: () => getCookie("jwttoken") })
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

     useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {    
                    connection.on('ReceiveMessage', message => {                      
                        setMessages(prevState => prevState.concat(message))                       
                    });
                })
                .catch(e => console.error('Connection failed: ', e));
        }
    }, [connection]);

    useEffect(()=>{
        if(props.chat.chatId != null && props.chat.chatId > 0)

        GetChatMessagesById(props.chat.chatId).then(response => {           
            setMessages(response);
        })
    },[props.chat.chatId])
    
    useEffect(()=>{
        const element = document.getElementById("elementForScrollTo")
        element.scrollIntoView({behavior: "auto"});
    },[messages])

    const sendMessage = async (message) => {

        const backendMessageModel = {
            touserid: props.chat.withUserId,
            tochatid: props.chat.chatId,
            message: message,
        };

        try {
            await  fetch('http://localhost:5001/MessagesContoller/SendMessage', { 
                method: 'POST', 
                body: JSON.stringify(backendMessageModel),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + getCookie("jwttoken"),
                }
            });
        }
        catch(e) {
            console.log('Sending message failed.', e);
        }
    }


    return <div className="col-sm chat">
     {props.chat.chatId != null
      ? <Fragment>
        {messages && messages.length > 0 && 
            messages.map((item,index) => <Message item={item} key={index}/>)}
            <ChatInput sendMessage={sendMessage}/>
        </Fragment> 
      : <Fragment>       
        <p className="not-found-string">Выберите чат слева</p>
        </Fragment>}

        <div id="elementForScrollTo"></div>
        </div>
        
        
}

export default ChatHistoryComponent;