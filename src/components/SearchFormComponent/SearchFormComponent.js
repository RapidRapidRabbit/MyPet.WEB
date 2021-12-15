import SearchSuggestComponent from "../SearchSuggestComponent/SearchSuggestComponent";
import "./SearchFormComponent.css"
import { useState } from "react";

const SearchFormComponent = (props) => {

const [townValue, setTownValue] = useState("");

    
const handleSearchClick = () => {
    let region  = document.getElementById("searchRegionSelect").value;
    let town = document.getElementById("searchTownLocation").value;
    let category = document.getElementById("searchCategorySelect").value;

    props.parentCallback({
        region: region,
        category: category,
        locationTown: town,
    })
}

const handleTownChange = (e) =>{
    setTownValue(e.target.value);  
}
    
    
    return <div className="search-form" >
    <div className="search-form-input region-select mb-3">
    <label htmlFor="searchRegionSelect" className="form-label search-label">Область
    </label>
    <select className="search-form-input-block form-select" id="searchRegionSelect">
      <option value="" >Вся Беларусь</option>
      <option value="Minsk">Минская</option>
      <option value="Brest">Брестская</option>
      <option value="Gomel">Гомельская</option>
      <option value="Grodno">Гродненская</option>
      <option value="Mogilev">Могилевская</option>
      <option value="Vitebsk">Витебская</option>
    </select>  
  </div>
    <div className="search-form-input-block town-block mb-3">
      <label htmlFor="searchTownLocation" className="form-label search-label">Город</label>
      <input type="text" className="form-control"  id="searchTownLocation" placeholder="Минск" onChange={handleTownChange} autoComplete="off" />
      <SearchSuggestComponent town={townValue}/>    
    </div>      
    <div className="search-form-input mb-3">
    <label htmlFor="searchCategorySelect" className="form-label search-label">Категория
    </label>
    <select className="search-form-input-block form-select" id="searchCategorySelect">
      <option value="">Все</option>
      <option value="Lost">Потерян</option>
      <option value="Found">Найден</option>
    </select>  
  </div>
  <div className="search-form-input search-button">  
    <button type="button" className="btn btn-primary" onClick={handleSearchClick}>Поиск</button>
    </div>
  </div>
}

export default SearchFormComponent;