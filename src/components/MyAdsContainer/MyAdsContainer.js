import { MyAdCard } from "../MyAdCard/MyAdCard";
import "./MyAdsContainer.css";
import useInfiniteScroll from "../../features/Hooks/useInfiniteScroll";
import { useEffect, useState, useRef } from "react";
import GetUsersPagedAds from "../../services/Http/GetUsersPagedAdsService/GetUsersPagedAdsService";
import { NavLink, useNavigate } from "react-router-dom";
import UnathorizedAccessError from "../../features/CustomExceptions/Http/UnathorizedAccessError";


const MyAdsContainer = () => {  
 
    const page = useRef(1);
    const [previousResponseLenght, setPreviousResponseLenght] = useState(0);
    const navigate = useNavigate();

    const fetchMoreAds = () => {      
  
      if(previousResponseLenght > 0){
        page.current++;  
      GetUsersPagedAds(page.current)
      .then(response => 
        setData(prevState => response.length > 0 ? prevState.concat(response) : prevState))
      .catch(error => {
        console.error(error);
      })
      .finally(()=>{
        setIsFetching(false);
      })    
      }    
  }
    const [setIsFetching] = useInfiniteScroll(fetchMoreAds) 
    const [data, setData] = useState([])
  
  /*eslint-disable*/
    useEffect(()=>{    
        GetUsersPagedAds(page.current)
        .then(response =>{
          setPreviousResponseLenght(response.length);
          setData(response)})
        .catch(error => {
          if (error instanceof UnathorizedAccessError){
            navigate('/signin')
          }
          console.error(error)
        })
        .finally(()=>{
          //do something
        })
    },[])
    /*eslint-enable*/      


    return <div className = "my-ads-container">
    {data && data.length > 0 ?
     data.map((item, index) => 
            <MyAdCard item = {item} key = {index}/>
        ) : 
        <p className="not-found-string">У вас пока нет объявлений. <NavLink to="/addadvertisement">Добавить</NavLink></p>}
     </div>
    
}
export default MyAdsContainer;