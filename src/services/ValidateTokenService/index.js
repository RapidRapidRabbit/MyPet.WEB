import { getCookie } from "../GetSetCookieService";
import { myPetAuth } from "../Hosts";

export const CheckToken = () =>{

    let jwttoken = getCookie("jwttoken"); 

    if(jwttoken==null){
        return false;
    }
    

    let url = new URL("/Account/CheckToken",`${myPetAuth}`);
    url.searchParams.set('jwttoken', jwttoken);

    let request = new XMLHttpRequest();
    request.open('GET', url, false);    
          

    try {

        request.send();

        if (request.status !== 200) {
          console.log(`Ошибка ${request.status}: ${request.statusText}`);
          return false;

        } else {            
          let response = JSON.parse(request.response);
          return response.tokenValidation;
        }
        
  } catch(err) { 
        console.log(err);
        return false;
      }
       
    
    
        
        
                   
}