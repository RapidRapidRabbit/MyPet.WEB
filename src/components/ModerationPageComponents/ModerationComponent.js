import { Fragment, useEffect, useState } from "react";
import ModerationCard from "./ModerationCard/ModerationCard";
import GetAdsOnModeration from "../../services/Http/GetAdsOnModeraion/GetAdsOnModeraion";
import "./ModerationComponent.css";


const ModerationComponent = () =>{

    const [ads, setAds] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);   

    useEffect(()=>{

        GetAdsOnModeration()
        .then(response => {
            setAds(response);    
        })
        .catch(error =>{
            console.error(error);
        })
        .finally(()=>{
           setIsLoaded(true);
        })
    },[])
    
   return <Fragment>
    {isLoaded ? (
        <div className="moderation-card-container">
    {ads && ads.length > 0 
      ? ads.map((item, index) =>           
      <ModerationCard item={item} key={index}/>
      ) : (
        <p className="not-found-string">К сожалению, ничего не нашлось.</p>) 
     }    
    </div>
    ):(
        null  
        )}
    
    </Fragment>
}

export default ModerationComponent;