import { getCookie } from "../GetSetCookieService";

export const getJwtTokenData = () => {

let jwttoken = getCookie("jwttoken");    

try{
let base64Url = jwttoken.split('.')[1];
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

return JSON.parse(jsonPayload);
    }
catch{
    return null;
}   
}