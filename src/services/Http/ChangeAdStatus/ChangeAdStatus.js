import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

 const ChangeAdStatusService = async (model) =>{   

    const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },           
            body: JSON.stringify(model),        
        };            
     
     return await BaseHttpService(`${myPetApi}/Advertisement/ChangeAdStatus`, requestOptions);     
}

export default ChangeAdStatusService;