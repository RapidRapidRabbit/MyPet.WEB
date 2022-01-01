import BaseHttpError from "../../features/CustomExceptions/Http/BaseHttpError";
import UnathorizedAccessError from "../../features/CustomExceptions/Http/UnathorizedAccessError";
import ForbiddenAccessError from "../../features/CustomExceptions/Http/ForbiddenAccessError";
import { getCookie } from "../GetSetCookieService";

const BaseHttpService = async (uri, fetchRequestOptions) =>{

    const authToken = "Bearer " + getCookie("jwttoken");    

    if(!fetchRequestOptions){
        console.log('no options')
        fetchRequestOptions = {
            headers: {
                'Authorization': authToken,     
            }
        }
    }else if (!fetchRequestOptions.headers){
        console.log('no headers')
        fetchRequestOptions.headers = {
            'Authorization': authToken,
        }
    }else if (fetchRequestOptions.headers){
        console.log("has headers")
        fetchRequestOptions.headers['Authorization'] = authToken
    }
        
    const response = await fetch(uri, fetchRequestOptions);
    
    if(response.status === 401){
        throw new UnathorizedAccessError();
    }
    if(response.status === 403){
        throw new ForbiddenAccessError()
    }
    if(response.status === 500){
        throw new BaseHttpError('Server error', response.status)
    }

    const result = await response.json();
    return result;

}

export default BaseHttpService;


