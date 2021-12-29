import BaseClassHttpService from "../BaseHttpService/BaseClassHttpService";
import { myPetApi } from "../Hosts";


class GetPagedAdsServiceClass extends BaseClassHttpService{

    static async getPagedAds(pageNumber, searchFormData){

        let url = new URL("/Advertisement/GetAdsPagedList",`${myPetApi}`);
        url.searchParams.set('PageNumber', pageNumber);

        if(searchFormData.region)
                url.searchParams.set('LocationRegion', searchFormData.region);        
        if(searchFormData.locationTown)
                url.searchParams.set('LocationTown', searchFormData.locationTown);
        if(searchFormData.category)
                url.searchParams.set('Category', searchFormData.category);


        return this.getRequest(url);

    }
}

export default GetPagedAdsServiceClass;