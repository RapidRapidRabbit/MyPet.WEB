import "./SearchSuggestComponent.css";
import townsData from "../../../data/townsData.json";
import { useEffect, useState } from "react";

const SearchSuggestComponent = (props) => {
    
    const [isVisible, setIsSuggestVisible] = useState(false);
    const [townsList, setTownsList] = useState([]);

    useEffect(()=>{       

        if(props.town.length >= 3){
            
            
            setTownsList([]);            

            townsData[0].regions.forEach((region)=>{

                region.cities.forEach((townItem)=>{

                    if(townItem.name.toUpperCase().includes(props.town.toUpperCase())){
                        setTownsList(prevState => prevState.concat([townItem.name + " " + region.name]))                        
                    } 
                })                
            })        

            setIsSuggestVisible(true)
        }
        else{            
            setIsSuggestVisible(false); 
            setTownsList([]);            
        }        
    },[props.town])

    

    useEffect(()=>{

        if(isVisible){
            window.addEventListener('click', handleWindowClick);            
        }        
        
        return () => window.removeEventListener('click', handleWindowClick);
    },[isVisible])

    const handleWindowClick = () =>{
        setIsSuggestVisible(false);                
    }
    const handleTownButtonClick = (e) =>{        
        let elem = document.getElementById("searchTownLocation");

        let result = e.target.value.split(" ");
        elem.value = result[0];

        setIsSuggestVisible(false);                
    }


    const suggestBlock = <div className="search-suggest-block">

    <ul className="towns-list">        
        {townsList && townsList.length > 0 && townsList.map((item, index) => 
          <li className="town-list-item"><button type="button" className="town-button" onClick={handleTownButtonClick} key={index} value={item}>{item}</button></li>
            )}  
    </ul>
    </div>

    return isVisible ? suggestBlock : null;
}

export default SearchSuggestComponent;