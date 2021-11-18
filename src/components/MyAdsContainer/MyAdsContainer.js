import { MyAdCard } from "../MyAdCard/MyAdCard";
import "./MyAdsContainer.css";
import useInfiniteScrollHook from "../../features/useInfiniteScrollHook/useInfiniteScrollHook";
import { useEffect, useState, useRef } from "react";
import { GetUsersPagedAds } from "../../services/GetUsersPagedAdsService/GetUsersPagedAdsService";




const MyAdsContainer = () => {  
 
    const page = useRef(1);

    const fetchMoreAds = () => {
      try{
  
      page.current++;
  
      GetUsersPagedAds(page.current).then(response => 
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
        GetUsersPagedAds(page.current).then(response => setData(response) )
    },[])      


    return <div className = "my-ads-container">
    {data && data.length > 0 && data.map((item, index) => 
            <MyAdCard item = {item} key = {index}/>
        )}
     </div>
    
}
export default MyAdsContainer;