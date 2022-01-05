import { myPetApi } from '../../../Hosts';
import BaseHttpService from '../../BaseHttpService';

 const GetUsersChatsService = async () =>{   

    const requestOptions = {
            method: 'GET',         
        }; 
     
     return await BaseHttpService(`${myPetApi}/MessagesContoller/GetChatsByUser`, requestOptions);    
}

export default GetUsersChatsService;