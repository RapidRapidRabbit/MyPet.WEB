import "./AdCardContainer.css";
import { GetPagedAds } from "../../services/GetPagedAdsService";
import { AdCard } from "../AdCard/AdCard";
import useInfiniteScrollHook from "../../features/useInfiniteScrollHook/useInfiniteScrollHook";
import { useEffect, useState, useRef, Fragment } from "react";
import SearchFormComponent from "../SearchFormComponent/SearchFormComponent";




const AdCardContainer = () => {

  const page = useRef(1);
  const searchFormData = useRef({});
  

  const getDataFromSearchForm = (dataFromChildComponent) => {        
    searchFormData.current = dataFromChildComponent;
    page.current = 1;
    
    GetPagedAds(page.current, searchFormData.current).then(response =>{   
        setAdCardsData(response);         
    });
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
    }
}
  const [setIsFetching] = useInfiniteScrollHook(fetchMoreAds) 
  const [adCardsdata, setAdCardsData] = useState([]) 


  useEffect(()=>{    
    GetPagedAds(page.current, searchFormData.current).then(response => setAdCardsData(response) ); 
  },[])
  
   
  
    return <Fragment>

    <SearchFormComponent parentCallback = {getDataFromSearchForm}/>

     <div className="custom-card-container">

     {adCardsdata && adCardsdata.length > 0 
      ? adCardsdata.map((item, index) => <AdCard item = {item} key = {index}/>) 
      : <p className="not-found-string">К сожалению, ничего не нашлось.</p> 
     } 
  </div>
  </Fragment>
}

export default AdCardContainer;