import { Fragment } from "react";
import { useParams } from "react-router";
import AdvertisementDetailsComponent from "../../components/AdvertisementDetailsComponent/AdvertisementDetails";
import Header from "../../components/HeaderComponent/HeaderComponent";

 


const AdvertisementDetailsPage = () => {
    
    let params = useParams();    
  
    return <Fragment>
           <Header/>           
           <AdvertisementDetailsComponent parameters={params}/>
          </Fragment>
    
}
export default AdvertisementDetailsPage;