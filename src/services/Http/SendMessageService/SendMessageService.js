import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

const SendMessageService = async (message) => {

   

    const requestOptions = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',                    
                },
            body: JSON.stringify(message),
        };   
    
     return await BaseHttpService(`${myPetApi}/MessagesContoller/SendMessage`, requestOptions); 
}

export default SendMessageService;

