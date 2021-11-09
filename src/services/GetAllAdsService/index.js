import { myPetApi } from "../Hosts";

export const GetAllAds = async () =>{ 
         
        try{  
                const response = await fetch(`${myPetApi}/Advertisement/GetAllAdvertisements`);
                let result = await response.json();        
                return result;
        }
        catch(error){
                console.log(error)
                return null;
        }
        
           
       
}