import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

const GetUsersPagedAds = async (pageNumber) =>{
        
        let url = new URL("/Advertisement/GetUsersAdsPagedList",`${myPetApi}`);
        url.searchParams.set('PageNumber', pageNumber);

        const requestOptions = {
                method: 'GET',        
            };        
      
        return await BaseHttpService(url, requestOptions);
}

export default GetUsersPagedAds;