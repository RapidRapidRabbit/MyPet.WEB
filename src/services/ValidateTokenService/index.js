import { getCookie } from "../GetSetCookieService";
import { myPetAuth } from "../Hosts";

export const CheckToken = async () =>{

    let jwttoken = getCookie("jwttoken");    
    let url = new URL("/Account/CheckToken",`${myPetAuth}`);
    url.searchParams.set('jwttoken', jwttoken);

   
    try{
    const response = await (await fetch(url));
        let result = await response.json();
        return result;}
    catch(err){
      return undefined;
    }    
       
    
    
        
        
                   
}