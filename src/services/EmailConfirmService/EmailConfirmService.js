import { myPetApi } from "../Hosts";

const EmailConfirmService = async (userId, emailToken) =>{
    let url = new URL("/Account/ConfirmEmail",`${myPetApi}`);
        url.searchParams.set('userId', userId);
        url.searchParams.set('emailToken', emailToken);

        try{  
            const response = await fetch(url);
            let result = await response.json();        
            return result;
    }
        catch(error){
            console.log(error)
            return null;
    }

}

export default EmailConfirmService;