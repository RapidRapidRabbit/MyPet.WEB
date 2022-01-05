import { myPetAuth } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

const SignUpService = async (data) =>{   

    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };
        
    return await BaseHttpService(`${myPetAuth}/Account/Register`, requestOptions);   
}
export default SignUpService;