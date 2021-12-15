import "./AdvertisementDetails.css";
import { useEffect, useState } from "react";
import GetAdById from "../../services/GetAdById/getAdById";
import AdDetailsViewComponent from "../AdDetailsViewComponent/AdDetailsViewComponent";

const AdvertisementDetailsComponent = (props) => {
  
  const [adData, setAdData] = useState({});
  const [isHasContent, setContent] = useState(false);

  /* eslint-disable */
  useEffect(() => {
    GetAdById(props.parameters.adId).then((response) => {
      if (response.status >= 400) {
        setContent(false);
      } else {
        setAdData(response);
        setContent(true);
        console.log(response);
      }
    });
  }, []);
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
          Когда-нибудь здесь будет чат или отправка имейла
        </div>
      </div>
    </div>
  );

  return isHasContent ? contentFound : contentNotFound;
};

export default AdvertisementDetailsComponent;
