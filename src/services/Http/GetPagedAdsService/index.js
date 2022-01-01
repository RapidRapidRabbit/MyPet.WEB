import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";


const GetPagedAds = async (pageNumber, searchFormData) =>{        
        
        let url = new URL("/Advertisement/GetAdsPagedList",`${myPetApi}`);
        url.searchParams.set('PageNumber', pageNumber);

        if(searchFormData.region)
                url.searchParams.set('LocationRegion', searchFormData.region);        
        if(searchFormData.locationTown)
                url.searchParams.set('LocationTown', searchFormData.locationTown);
        if(searchFormData.category)
                url.searchParams.set('Category', searchFormData.category);        
       
       return await BaseHttpService(url);
}

export default GetPagedAds;