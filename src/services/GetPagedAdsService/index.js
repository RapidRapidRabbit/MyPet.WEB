import { myPetApi } from "../Hosts";

export const GetPagedAds = async (pageNumber) =>{
        
        let url = new URL("/Advertisement/GetAdsPagedList",`${myPetApi}`);
        url.searchParams.set('PageNumber', pageNumber);
         
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