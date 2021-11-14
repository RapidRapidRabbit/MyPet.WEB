import { myPetAuth } from "../Hosts";

 const SignInService = async (data) =>{

    try{

    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };  
          
    const response = await fetch(`${myPetAuth}/Account/Login`, requestOptions);
    
        let result = await response.json();        
        return result;}

    catch(err){
      console.error(err);      
    }                   
}

export default SignInService;