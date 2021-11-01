import { getCookie } from "../GetSetCookieService";
import { myPetAuth } from "../Hosts";

export const CheckToken = () =>{

    const token = getCookie("jwttoken");    
    /*if(token==null){
        return false;
    }*/
    let jwttoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZ0BtYWlsLnJ1IiwidW5pcXVlX25hbWUiOiJmMzE0ZDY1Mi0zZDI1LTRhZTUtYTM4My1iNDM2OGUwODczNWYiLCJleHAiOjE2MzU4MzkwODUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCJ9.WnuNPjn3xsnBqsINKNtudAf0vnwWuWcKkPNERznCJEY"
    
    
     let response =  fetch  (`${myPetAuth}/Account/CheckToken/?jwttoken=${jwttoken}`,{
        method: 'POST',       
        body: JSON.stringify(jwttoken),      
    }).then(response => response.json()).catch( err => console.log(err))

    
        console.log(response.tokenValidation);
        return response.tokenValidation
    
    
        

    //const result = response.json();    
        
    

        
    //let isTokenValid = result.tokenValidation == "true" ? true : false

   // alert(isTokenValid);
                 
}