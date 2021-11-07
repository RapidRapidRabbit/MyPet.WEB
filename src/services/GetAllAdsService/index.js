import { myPetApi } from "../Hosts";

export const GetAllAds = async () =>{  
          
        const response = await fetch(`${myPetApi}/Advertisement/GetAllAdvertisements`);
        let result = await response.json();
        return result;
       // if(response.ok){
        //    return await response.json();
        //}
           
       
}