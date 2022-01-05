import { Fragment, useEffect, useState } from "react";
import GetUsersChatsService from "../../services/Http/ChatServices/GetUsersChatsService/GetUsersChatsService";
import ChatHistoryComponent from "./ChatHistoryComponent/ChatHistoryComponent";
import './ChatWindowComponent.css'
import ChatWithUserBlock from "./ChatWithUserBlock/ChatWithUserBlock";

const ChatsWindowComponent = () => {

    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState({});
    const [activeChatId, setActiveChatId] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    

    const getCurrentChat = (chatIdFromChild, withUserIdFromChild) =>{
        
        setActiveChatId(chatIdFromChild);

        setCurrentChat(
            {
                chatId: chatIdFromChild,
                withUserId: withUserIdFromChild,
            });
    }
    
    useEffect(()=>{        
        GetUsersChatsService()
        .then(response => {    
            setChats(response);    
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(()=>{
            setIsLoaded(true);
        })
    },[])
    
    

    return isLoaded ?    
    (
        <Fragment>            
        {chats.length > 0 ? (    
    <div className="container chat-container">
      <div className="row">
        <div className="col-sm chats-list">
        {     
            chats.map((item,index) => <ChatWithUserBlock activeChatId={activeChatId} callBackFromParent={getCurrentChat} item={item} key={index}/>) 
        }              
        </div>        
        <ChatHistoryComponent chat={currentChat}/>        
      </div>
    </div>
     ) : (
    <p className="not-found-string">У вас пока нет сообщений. Попробуйте открыть объявление и начать чат с пользователем.</p>)

        }
        </Fragment>
    ):(
        null
    )
    
};

export default ChatsWindowComponent;
