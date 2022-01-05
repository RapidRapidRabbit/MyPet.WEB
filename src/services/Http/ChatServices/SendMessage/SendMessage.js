import { myPetApi } from "../../../Hosts";
import BaseHttpService from "../../BaseHttpService";

const SendMessage = async (backEndModel) =>{

    const requestOptions = {
        method: 'POST', 
        body: JSON.stringify(backEndModel),
        headers: {
            'Content-Type': 'application/json',    
        }
    }

    return await BaseHttpService(`${myPetApi}/MessagesContoller/SendMessage`, requestOptions)

}

export default SendMessage;