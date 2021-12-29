import { GetRequest } from "../BaseHttpService/BaseHttpService";
import { myPetApi } from "../Hosts";

export const GetPagedAds = async (pageNumber, searchFormData) =>{
        
        let url = new URL("/Advertisement/GetAdsPagedList",`${myPetApi}`);
        url.searchParams.set('PageNumber', pageNumber);

        if(searchFormData.region)
                url.searchParams.set('LocationRegion', searchFormData.region);        
        if(searchFormData.locationTown)
                url.searchParams.set('LocationTown', searchFormData.locationTown);
        if(searchFormData.category)
                url.searchParams.set('Category', searchFormData.category);       
             
        
         
       return GetRequest(url);
               // const response = await fetch(url);

               // return response;
              // let result = await response.json();        
              // return result;
        
        
           
       
}