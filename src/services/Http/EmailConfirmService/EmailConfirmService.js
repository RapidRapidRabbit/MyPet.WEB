import { myPetApi } from "../../Hosts";
import BaseHttpService from "../BaseHttpService";

const EmailConfirmService = async (userId, emailToken) =>{

    const normalizedToken = emailToken.replace(/ /g,"+");

    const url = new URL("/Account/ConfirmEmail",`${myPetApi}`);
        url.searchParams.set('userId', userId);
        url.searchParams.set('emailToken', normalizedToken);
        
    return await BaseHttpService(url);
}

export default EmailConfirmService;