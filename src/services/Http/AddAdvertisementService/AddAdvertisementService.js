import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

 const AddAdvertisementService = async (data) =>{    

    const requestOptions = {
            method: 'POST',           
            body: data,        
        };            
     
     return await BaseHttpService(`${myPetApi}/Advertisement/AddAdvertisement`, requestOptions);     
}

export default AddAdvertisementService;