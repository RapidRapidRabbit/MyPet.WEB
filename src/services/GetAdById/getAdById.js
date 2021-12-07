import { myPetApi } from "../Hosts";

const GetAdById = async (adId) =>{
        
        let url = new URL("/Advertisement/GetAdvertisementById",`${myPetApi}`);
        url.searchParams.set('id', adId);     
        
         
        try{  
                const response = await fetch(url);
                let result = await response.json();        
                return result;
        }
        catch(error){
                console.log(error)
                return null;
        }          
       
}

export default GetAdById;