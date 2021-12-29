//import { useNavigate } from "react-router-dom";

export const GetRequest = async (uri) =>{

//const navigate = useNavigate();  

  try{

    const response = await fetch(uri);
    
   // if(response.status === 401) do something

    const result = await response.json();
    return result;

  }
  catch (error){
    window.location = '/errorPage'
  }
    

    
}

export const OptionsRequest = (uri, requestOptions) => {


}
