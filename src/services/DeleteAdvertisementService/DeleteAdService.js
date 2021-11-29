import { myPetApi } from "../Hosts";
import { getCookie } from "../GetSetCookieService";


const DeleteAdService = async (AdId) =>{

    let url = new URL("/Advertisement/DeleteAdvertisement",`${myPetApi}`);
        url.searchParams.set('Id', AdId);

        const requestOptions = {
                method: 'DELETE',                
                headers: {
                  'Authorization': "Bearer " + getCookie("jwttoken"),
                }
            };  
         
        try{  
                const response = await fetch(url, requestOptions);
                let result = await response.json();        
                return result;
        }
        catch(error){
                console.log(error)
                return null;
        }
}

export default DeleteAdService;