import { myPetApi } from "../Hosts";
import { getCookie } from "../GetSetCookieService";

export const GetUsersPagedAds = async (pageNumber) =>{
        
        let url = new URL("/Advertisement/GetUsersAdsPagedList",`${myPetApi}`);
        url.searchParams.set('PageNumber', pageNumber);

        const requestOptions = {
                method: 'GET',                
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