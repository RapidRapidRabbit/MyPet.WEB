import { myPetApi } from "../Hosts";

 const AddAdvertisementService = async (data) =>{

    try{

    const requestOptions = {
            method: 'PUT',           
            body: data,
        };  
          
     let response = await fetch(`${myPetApi}/Advertisement/AddAdvertisement`, requestOptions)
     let result = await response.json();     
     return result;      
    }
    catch(err){
      console.error(err);
      return;      
    }                   
}

export default AddAdvertisementService;