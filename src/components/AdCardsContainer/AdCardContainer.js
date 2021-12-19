import "./AdCardContainer.css";
import { GetPagedAds } from "../../services/GetPagedAdsService";
import { AdCard } from "../AdCard/AdCard";
import useInfiniteScrollHook from "../../features/useInfiniteScrollHook/useInfiniteScrollHook";
import { useEffect, useState, useRef, Fragment } from "react";
import SearchFormComponent from "../SearchFormComponent/SearchFormComponent";
import Loader from "../Loader/Loader";




const AdCardContainer = () => {

  const page = useRef(1);
  const searchFormData = useRef({});
  const [previousResponseLenght, setPreviousResponseLenght] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  

  const getDataFromSearchForm = (dataFromChildComponent) => {        
    searchFormData.current = dataFromChildComponent;
    page.current = 1;
    
    GetPagedAds(page.current, searchFormData.current).then(response =>{
               
        setAdCardsData(response);
        setPreviousResponseLenght(response.length);
              
    });
  }  

  const fetchMoreAds = () => {   
    try{      
    
    if(previousResponseLenght > 0){
      
    page.current++;

    GetPagedAds(page.current, searchFormData.current).then(response =>{      
      setPreviousResponseLenght(response.length);

      if(response.length > 0){
        setAdCardsData(prevState => prevState.concat(response))
      }});    
  }}    
    catch(err){
      console.error(err);      
    }
    setIsFetching(false);
  }

  const [setIsFetching] = useInfiniteScrollHook(fetchMoreAds) 
  const [adCardsdata, setAdCardsData] = useState([]) 

// useEffect(()=>{
//     console.log(`previousResponseLenght changed to: ${previousResponseLenght}`);
// },[previousResponseLenght])

  useEffect(()=>{

    try{
      GetPagedAds(page.current, searchFormData.current).then(response => {        
        
      setPreviousResponseLenght(response.length);
      setAdCardsData(response);
      setIsLoading(false);

      })
    }
     catch(err){
      setIsLoading(false);
      console.log(err);      
    }
  },[])
  
   
  
    return <Fragment>

    <SearchFormComponent parentCallback = {getDataFromSearchForm}/>
    <Loader setShow={isLoading}/>

     <div className="custom-card-container">

     {adCardsdata && adCardsdata.length > 0 
      ? adCardsdata.map((item, index) => <AdCard item = {item} key = {index}/>) 
      : <p className="not-found-string">К сожалению, ничего не нашлось.</p> 
     } 
  </div>
  </Fragment>
}

export default AdCardContainer;