import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

 const UpdateAdvertisementService = async (data) =>{    

    const requestOptions = {
            method: 'POST',           
            body: data,            
        };

     return await BaseHttpService(`${myPetApi}/Advertisement/UpdateAdvertisement`, requestOptions);   
}

export default UpdateAdvertisementService;