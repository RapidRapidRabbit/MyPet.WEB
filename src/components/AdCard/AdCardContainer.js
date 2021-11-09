import "./AdCard.css";
import { GetAllAds } from "../../services/GetAllAdsService";
import React from "react";
import { AdCard } from "./AdCard";




const AdCardContainer = () => {

  const [data, setData] = React.useState([])  

  React.useEffect(()=>{    
    GetAllAds().then(response => setData(response) )
  },[])  
     
  
   
    return <div className="custom-container">
 
 {data && data.length > 0 && data.map((item, index) => 
            <AdCard item = {item} key = {index}/>
        )}
  
  </div>
}

export default AdCardContainer;