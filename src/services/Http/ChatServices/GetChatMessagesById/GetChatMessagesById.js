
import { myPetApi } from '../../../Hosts';
import BaseHttpService from '../../BaseHttpService';

 const GetChatMessagesById = async (chatId) =>{   

       let url = new URL("/MessagesContoller/GetChatMessagesById",`${myPetApi}`);
        url.searchParams.set('id', chatId);

    const requestOptions = {
            method: 'GET',        
        };  
          
     return await BaseHttpService(url, requestOptions);   
}

export default GetChatMessagesById;