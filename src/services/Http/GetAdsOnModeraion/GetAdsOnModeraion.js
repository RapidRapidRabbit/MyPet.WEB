import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

const GetAdsOnModeration = async () =>{
        
    let url = new URL("/Advertisement/GetAdsOnModeration",`${myPetApi}`);               

    return await BaseHttpService(url);      
}

export default GetAdsOnModeration;