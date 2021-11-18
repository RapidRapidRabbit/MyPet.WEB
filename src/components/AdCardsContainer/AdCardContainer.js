import "./AdCardContainer.css";
import { GetPagedAds } from "../../services/GetPagedAdsService";
import { AdCard } from "../AdCard/AdCard";
import useInfiniteScrollHook from "../../features/useInfiniteScrollHook/useInfiniteScrollHook";
import { useEffect, useState, useRef } from "react";




const AdCardContainer = () => {

  const page = useRef(1);

  const fetchMoreAds = () => {
    try{

    page.current++;

    GetPagedAds(page.current).then(response => 
      setData(prevState => response.length > 0 ? prevState.concat(response) : prevState))

    setIsFetching(false);    
    
    }
    catch(err){
      console.error(err);
      return;
    }
}
  const [isFetching, setIsFetching] = useInfiniteScrollHook(fetchMoreAds) 
  const [data, setData] = useState([])


  useEffect(()=>{    
    GetPagedAds(page.current).then(response => setData(response) )
  },[])  
     
  
   
    return <div className="custom-card-container">
 
 {data && data.length > 0 && data.map((item, index) => 
            <AdCard item = {item} key = {index}/>
        )}
  
  </div>
}

export default AdCardContainer;