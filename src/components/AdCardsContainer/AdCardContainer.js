import "./AdCardContainer.css";
import { GetPagedAds } from "../../services/GetPagedAdsService";
import { AdCard } from "../AdCard/AdCard";
import useInfiniteScrollHook from "../../features/useInfiniteScrollHook/useInfiniteScrollHook";
import { useEffect, useState, useRef, Fragment } from "react";
import SearchFormComponent from "../SearchFormComponent/SearchFormComponent";




const AdCardContainer = () => {

  const page = useRef(1);
  const searchFormData = useRef({});
  

  const getDataFormSearchForm = (childData) => {        
    searchFormData.current = childData;
    page.current = 1;
    
    GetPagedAds(page.current, searchFormData.current).then(response => setAdCardsData(response) );
  }
  

  

  const fetchMoreAds = () => {
    try{

    page.current++;

    GetPagedAds(page.current, searchFormData.current).then(response => 
      setAdCardsData(prevState => response.length > 0 ? prevState.concat(response) : prevState))

    setIsFetching(false);    
    
    }
    catch(err){
      console.error(err);
      return;
    }
}
  const [isFetching, setIsFetching] = useInfiniteScrollHook(fetchMoreAds) 
  const [adCardsdata, setAdCardsData] = useState([])


  useEffect(()=>{    
    GetPagedAds(page.current, searchFormData.current).then(response => setAdCardsData(response) );
  },[])
  
   
    return <Fragment>

    <SearchFormComponent parentCallback = {getDataFormSearchForm}/>

     <div className="custom-card-container"> 
 {adCardsdata && adCardsdata.length > 0 && adCardsdata.map((item, index) => 
            <AdCard item = {item} key = {index}/>)}  
  </div>
  </Fragment>
}

export default AdCardContainer;