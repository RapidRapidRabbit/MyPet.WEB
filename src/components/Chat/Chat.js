import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import ChatWindow from './ChatWindow/ChatWindow';
import ChatInput from './ChatInput/ChatInput';
import { myPetApi } from '../../services/Hosts';
import { getCookie } from '../../services/GetSetCookieService';

const Chat = () => {
    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);

    latestChat.current = chat;

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
                    console.log('Connected!');                    
    
                    connection.on('ReceiveMessage', message => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);
                    
                        setChat(updatedChat);
                    });
                })
                .catch(e => console.error('Connection failed: ', e));
        }
    }, [connection]);

    const sendMessage = async (user, message) => {

        const chatMessage = {
            user: user,
            message: message,
            toUserId: "0f014ecd-afd8-49ad-abac-83edd0645f0d",
        };

        if (connection.connectionStarted) {
            try {
                await connection.send('SendMessage', chatMessage);
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            console.error("something went wrong trying to send message")
        }
    }

    return (
        <div>
            <ChatInput sendMessage={sendMessage} />
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    );
};

export default Chat;
