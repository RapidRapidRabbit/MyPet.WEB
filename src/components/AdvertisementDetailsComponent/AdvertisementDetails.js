import "./AdvertisementDetails.css";
import { useEffect, useState } from "react";
import GetAdById from "../../services/GetAdById/getAdById";
import AdDetailsViewComponent from "./DetailsViewComponent/AdDetailsViewComponent";
import SendMessageFormComponent from "./SendMessageFormComponent/SendMessageFormComponent";
import Loader from "../../components/Loader/Loader";


const AdvertisementDetailsComponent = (props) => {
  
  const [adData, setAdData] = useState({});
  const [isHasContent, setContent] = useState(false);
  const [adOwnerId, setAdOwnerId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  /* eslint-disable */
  useEffect( async () => {

    await GetAdById(props.parameters.adId).then((response) => {
      
      if (response.status >= 400) {
        setContent(false);
      } else {
        setAdOwnerId(response.userId);        
        setAdData(response);
        setContent(true);        
      }
    });
    setIsLoaded(true)
  },[]);
  /* eslint-enable */

  const contentNotFound = (
    <p className="not-found-string">
      К сожалению, такого объявления не существует
    </p>
  );

  const contentFound = (
    <div className="container">
      <div className="row">
        <div className="col-sm details-block">
          <AdDetailsViewComponent item={adData} />
        </div>
        <div className="col-sm details-block">
        <SendMessageFormComponent adOwnerId={adOwnerId}/>         
        </div>
      </div>
    </div>
  );

  return isLoaded ? (
    (isHasContent ? contentFound : contentNotFound)
  ):(
  <Loader setShow={true}/>)
};

export default AdvertisementDetailsComponent;