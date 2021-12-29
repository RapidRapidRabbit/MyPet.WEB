import { getCookie } from "../../GetSetCookieService";
import { myPetApi } from '../../Hosts';

 const GetUsersChatsService = async () =>{

    try{

    const requestOptions = {
            method: 'GET',           
            headers: {
              'Authorization': "Bearer " + getCookie("jwttoken"),
            }
        };  
          
     let response = await fetch(`${myPetApi}/MessagesContoller/GetChatsByUser`, requestOptions)
     let result = await response.json();     
     return result;      
    }
    catch(err){
      console.error(err);
      return;      
    }                   
}

export default GetUsersChatsService;