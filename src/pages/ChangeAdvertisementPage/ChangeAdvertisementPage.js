import { Fragment } from "react";
import { useParams } from "react-router";
import ChangeAdFormComponent2 from "../../components/ChangeAdFormComponent/ChangeAdFormComponent";
import Header from "../../components/HeaderComponent/HeaderComponent";

 


const ChangeAdvertisementPage2 = () => {
    
    let params = useParams();    
  
    return <Fragment>
           <Header/>           
           <ChangeAdFormComponent2 aditem={params}/>
          </Fragment>
    
}
export default ChangeAdvertisementPage2;