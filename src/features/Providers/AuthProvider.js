import { useCallback, useEffect, useMemo, useState } from "react";
import { getCookie, setCookie } from "../../services/GetSetCookieService";
import { CheckToken } from "../../services/Http/ValidateTokenService";
import { AuthContext } from "../Contexts/AuthContext";



function AuthProvider(props) {  
  
  const [isAuthed, setAuthed] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false)
  const [userData, setUserData] = useState(null)


   
  const logOut = useCallback (()=>{
    setCookie("jwttoken", "", {'max-age': -1});    
    setAuthed(false);
    setIsAdmin(false);
    setUserData(null);
  },[])
   
  const logIn = useCallback((data)=>{    
    setCookie("jwttoken", data.jwtToken) 
    setUserData(data);     
    setAuthed(true);
    if(data.roles.includes('admin')){
          setIsAdmin(true);
        }                
  },[]); 

  

 /* eslint-disable */
  const loadData = useCallback( async ()=>{

    const token = getCookie("jwttoken")

     if(token === null){         
         setAuthed(false)         
     }
     else
     { 
       await CheckToken(token)
       .then(data => {
        if(JSON.parse(data.tokenValidation) === true){               
          setAuthed(true);
          setUserData(data);
        if(data.roles.includes('admin')){
          setIsAdmin(true);
        }          
      }
      else{
        logOut();  
      }  
    })
    .catch(error => {
      console.error(error);
      logOut();
    })
    .finally(()=>{
      //do something
    })    
      } 
  setIsLoaded(true);
  },[])
  /* eslint-enable */ 

  useEffect(()=>{    
    loadData();
  },[loadData])
  

  const contextValue = useMemo(
    () => ({
      isLoaded,
      isAuthed,
      isAdmin,
      userData,
      logIn,
      logOut,
    }),
    [userData, isAuthed, isLoaded, isAdmin, logIn, logOut]
  );

  return (      
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;