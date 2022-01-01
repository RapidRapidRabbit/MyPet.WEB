import { Fragment, useEffect, useState } from "react";
import GetUsersChatsService from "../../services/ChatServices/GetUsersChatsService/GetUsersChatsService";
import ChatHistoryComponent from "./ChatHistoryComponent/ChatHistoryComponent";
import './ChatWindowComponent.css'
import ChatWithUserBlock from "./ChatWithUserBlock/ChatWithUserBlock";

const ChatsWindowComponent = () => {

    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState({});
    const [activeChatId, setActiveChatId] = useState(0);
    

    const getCurrentChat = (chatIdFromChild, withUserIdFromChild) =>{
        
        setActiveChatId(chatIdFromChild);
        setCurrentChat(
            {
                chatId: chatIdFromChild,
                withUserId: withUserIdFromChild,
            }            
        );
    }
    
    useEffect(()=>{        
        GetUsersChatsService().then(response => {    
            setChats(response);
        })
    },[])
    
    

    return <Fragment>   
        {chats.length > 0 ? (    
    <div className="container chat-container">
      <div className="row">
        <div className="col-sm chats-list">
        {
            chats && chats.length > 0 && 
            chats.map((item,index) => <ChatWithUserBlock activeChatId={activeChatId} callBackFromParent={getCurrentChat} item={item} key={index}/>) 
        }
                  
        </div>        
        <ChatHistoryComponent chat={currentChat}/>        
      </div>
    </div>
     ) : (
    <p className="not-found-string">У вас пока нет сообщений</p>)

        }
    </Fragment>
};

export default ChatsWindowComponent;
