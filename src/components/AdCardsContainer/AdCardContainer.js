import "./AdCardContainer.css";
import GetPagedAds from "../../services/Http/GetPagedAdsService";
import { AdCard } from "../AdCard/AdCard";
import useInfiniteScroll from "../../features/Hooks/useInfiniteScroll";
import { useEffect, useState, useRef, Fragment } from "react";
import SearchFormComponent from "../SearchFormComponent/SearchFormComponent";
import Loader from "../Loader/Loader";


const AdCardContainer = () => {

  const page = useRef(1);
  const searchFormData = useRef({});
  const [previousResponseLenght, setPreviousResponseLenght] = useState(0);
  const [isLoading, setIsLoading] = useState(true);  

  const sendRequestFromSearchForm = (dataFromChildComponent) => {

    searchFormData.current = dataFromChildComponent;
    page.current = 1;
    
    GetPagedAds(page.current, searchFormData.current)
    .then(response =>{           
      setAdCardsData(response);
      setPreviousResponseLenght(response.length);          
    })
    .catch(error =>{
      console.error(error)
    })
    .finally(()=>{
      // do something
    })
  }  

  const fetchMoreAds = () => {   
         
    
    if(previousResponseLenght > 0){
      
    page.current++;

    GetPagedAds(page.current, searchFormData.current)
    .then(response =>{
      setPreviousResponseLenght(response.length);
      if(response.length > 0){
        setAdCardsData(prevState => prevState.concat(response))
      }})
    .catch(error =>{
      console.error(error.message);
    })
    .finally(()=>{
      setIsFetching(false);
    })    
  }     
  }

  const [setIsFetching] = useInfiniteScroll(fetchMoreAds) 
  const [adCardsdata, setAdCardsData] = useState([]) 


  useEffect(()=>{    
     
    GetPagedAds(page.current, searchFormData.current)
    .then(response => {     
      setPreviousResponseLenght(response.length);
      setAdCardsData(response);      
      })
    .catch(error => {
      console.error(error);
      })
    .finally(()=>{
      setIsLoading(false);
    })  
  },[])
  
   
  
    return <Fragment>

    <SearchFormComponent parentCallback = {sendRequestFromSearchForm}/>
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