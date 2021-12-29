
class BaseClassHttpService {
  constructor() {
   // const { logout, token } = useAuth()
   // this.logout = logout;
   // this.navigate = useNavigate();
  }

 static async getRequest(uri) {
    try{

    const response = await fetch(uri);
    
  

    const result = await response.json();
    return result;

  }
  catch (error){
  //  navigate("/errorPage")
    window.location = '/errorPage'
  }
  }
}

export default BaseClassHttpService
