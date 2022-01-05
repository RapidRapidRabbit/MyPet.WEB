import { myPetAuth } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

export const CheckToken = async (jwttoken) =>{      

    let url = new URL("/Account/CheckToken",`${myPetAuth}`);
    url.searchParams.set('jwttoken', jwttoken);
    
    return await BaseHttpService(url);
                   
}