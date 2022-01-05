import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

const GetAdById = async (adId) =>{
        
        let url = new URL("/Advertisement/GetAdvertisementById",`${myPetApi}`);
        url.searchParams.set('id', adId);       

        return await BaseHttpService(url);      
}

export default GetAdById;