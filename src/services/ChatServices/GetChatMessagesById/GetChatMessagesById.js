import { getCookie } from "../../GetSetCookieService";
import { myPetApi } from '../../Hosts';

 const GetChatMessagesById = async (chatId) =>{

    try{

       let url = new URL("/MessagesContoller/GetChatMessagesById",`${myPetApi}`);
        url.searchParams.set('id', chatId);

    const requestOptions = {
            method: 'GET',           
            headers: {
              'Authorization': "Bearer " + getCookie("jwttoken"),
            }
        };  
          
     let response = await fetch(url, requestOptions)
     let result = await response.json();     
     return result;      
    }
    catch(err){
      console.error(err);
      return;      
    }                   
}

export default GetChatMessagesById;