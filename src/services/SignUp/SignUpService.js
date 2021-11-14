import { myPetAuth } from "../Hosts";

const SignUpService = async (data) =>{

    try{

    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };  
          
    const response = await fetch(`${myPetAuth}/Account/Register`, requestOptions);
    
        let result = await response.json();        
        return result;}

    catch(err){
      console.error(err);
      return undefined;      
    }                    
}
export default SignUpService;