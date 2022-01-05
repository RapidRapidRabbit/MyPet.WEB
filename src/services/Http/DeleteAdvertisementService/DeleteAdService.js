import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";



const DeleteAdService = async (AdId) =>{

    let url = new URL("/Advertisement/DeleteAdvertisement",`${myPetApi}`);
        url.searchParams.set('Id', AdId);

        const requestOptions = {
                method: 'DELETE',        
            };  
         
        return await BaseHttpService(url, requestOptions);
}

export default DeleteAdService;