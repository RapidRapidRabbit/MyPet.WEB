import { myPetApi } from "../../Hosts";
import { getCookie } from "../../GetSetCookieService";

const SendMessageService = async (message) => {

    try{

    const requestOptions = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + getCookie("jwttoken"),
                },
            body: JSON.stringify(message),
        };  
          
    const response = await fetch(`${myPetApi}/MessagesContoller/SendMessage`, requestOptions);
    
        let result = await response.json();        
        return result;
    }
    catch(err){
      console.error(err);
      return undefined;      
    }                    

}

export default SendMessageService;

