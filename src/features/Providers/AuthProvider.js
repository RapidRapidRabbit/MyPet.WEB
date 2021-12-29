import { useCallback, useEffect, useMemo, useState } from "react";
import { getCookie, setCookie } from "../../services/GetSetCookieService";
import { CheckToken } from "../../services/ValidateTokenService";
import { AuthContext } from "../Contexts/AuthContext";



function AuthProvider(props) {  
  
  const [isAuthed, setAuthed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [userData, setUserData] = useState(null)


  
  const logOut = useCallback (()=>{
    setCookie("jwttoken", "", {'max-age': -1});    
    setAuthed(false);
    setUserData(null);
  },[]) 

  const logIn = () =>{
      console.log("set true")
      setAuthed(true)
  }

  


  const loadData = useCallback( async ()=>{

    const token = getCookie("jwttoken")

     if(token === null){
         console.log("token is null")
         setAuthed(false)         
     }else{

      try {
       await CheckToken().then(data => {

          if(JSON.parse(data.tokenValidation) === true){               
        setAuthed(true);
        setUserData(data);        
      }else{
        logOut();  
      }
      
    })
      } catch (error) {
        setAuthed(false)
      }} 
     setIsLoaded(true);
  },[])

  useEffect(()=>{    
    loadData();
  },[loadData])
  

  const contextValue = useMemo(
    () => ({
      isLoaded,
      isAuthed,
      userData,
      logIn,
      logOut,
    }),
    [userData, isAuthed, isLoaded, logIn, logOut]
  );

  return (      
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;