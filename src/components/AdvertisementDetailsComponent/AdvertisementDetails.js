import "./AdvertisementDetails.css";
import { useEffect, useState } from "react";
import GetAdById from "../../services/Http/GetAdById/getAdById";
import AdDetailsViewComponent from "./DetailsViewComponent/AdDetailsViewComponent";
import SendMessageFormComponent from "./SendMessageFormComponent/SendMessageFormComponent";
import AdminButtons from "./AdminButtons/AdminButtons";


const AdvertisementDetailsComponent = (props) => {
  
  const [adData, setAdData] = useState({});
  const [isHasContent, setContent] = useState(false);  
  const [isLoaded, setIsLoaded] = useState(false)

  /* eslint-disable */
  useEffect(() => {

    GetAdById(props.parameters.adId)
    .then((response) => {
      
      if (response.status >= 400) {
        setContent(false);
      } else {               
        setAdData(response);
        setContent(true);        
      }
    })
    .catch(error =>{
      setContent(false)
      console.error(error);
    })
    .finally(()=>{
      setIsLoaded(true)
    });    
  },[]);
  /* eslint-enable */

  const contentNotFound = (
    <p className="not-found-string">К сожалению, такое объявление найти не удалось</p>
  );

  const contentFound = (
    <div className="container">
      <div className="row">
        <div className="col-sm details-block">
          <AdDetailsViewComponent item={adData} />          
        </div>
        <div className="col-sm details-block">
        <SendMessageFormComponent adItem={adData}/>
        <AdminButtons adItem={adData}/>         
        </div>
      </div>
    </div>
  );

  return isLoaded ? (
    (isHasContent ? contentFound : contentNotFound)
  ):(  
  null
  )
};

export default AdvertisementDetailsComponent;