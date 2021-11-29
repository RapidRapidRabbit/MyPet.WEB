import { getCookie } from "../GetSetCookieService";
import { myPetApi } from "../Hosts";

 const UpdateAdvertisementService = async (data) =>{

    try{

    const requestOptions = {
            method: 'POST',           
            body: data,
            headers: {
              'Authorization': "Bearer " + getCookie("jwttoken"),
            }
        };  
          
     let response = await fetch(`${myPetApi}/Advertisement/UpdateAdvertisement`, requestOptions)
     let result = await response.json();     
     return result;      
    }
    catch(err){
      console.error(err);
      return;      
    }                   
}

export default UpdateAdvertisementService;