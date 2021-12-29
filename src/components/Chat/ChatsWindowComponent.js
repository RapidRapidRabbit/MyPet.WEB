import { Fragment, useEffect, useState } from "react";
import GetUsersChatsService from "../../services/ChatServices/GetUsersChatsService/GetUsersChatsService";
import Header from "../HeaderComponent/HeaderComponent";
import ChatHistoryComponent from "./ChatHistoryComponent/ChatHistoryComponent";
import './ChatWindowComponent.css'
import ChatWithUserBlock from "./ChatWithUserBlock/ChatWithUserBlock";

const ChatsWindowComponent = () => {

    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState({});
    

    const getCurrentChat = (chatIdFromChild, withUserIdFromChild) =>{
        setCurrentChat(
            {
                chatId: chatIdFromChild,
                withUserId: withUserIdFromChild,
            }            
        );
        
    }
    /*es-lint-disable*/
    useEffect(()=>{
        
        GetUsersChatsService().then(response => {
            console.log(response);
            setChats(response);
        })
    },[])
    /*es-lint-enable*/
    

    return <Fragment>
    <Header />
    <div className="container chat-container">
      <div className="row">
        <div className="col-sm chats-list">
        {
            chats && chats.length > 0 && 
            chats.map((item,index) => <ChatWithUserBlock callBackFromParent={getCurrentChat} item={item} key={index}/>) 
        }
                  
        </div>
        <div className="col-sm chat">
        <ChatHistoryComponent chat={currentChat}/>        
        </div>
      </div>
    </div>
    </Fragment>
};

export default ChatsWindowComponent;
