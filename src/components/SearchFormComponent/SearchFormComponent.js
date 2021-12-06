import SearchSuggestComponent from "../SearchSuggestComponent/SearchSuggestComponent";
import "./SearchFormComponent.css"
import { useState } from "react";

const SearchFormComponent = (props) => {

const [townValue, setTownValue] = useState("");

    
const handleSearchClick = () => {
    let town = document.getElementById("searchTownLocation").value;
    let category = document.getElementById("searchCategorySelect").value;

    props.parentCallback({
        category: category,
        locationTown: town,
    })
}

const handleTownChange = (e) =>{
    setTownValue(e.target.value);  
}
    
    
    return <div className="search-form" >
    <div className="search-form-input-block town-block mb-3">
      <label htmlFor="searchTownLocation" className="form-label search-label">Город</label>
      <input type="text" className="form-control"  id="searchTownLocation" placeholder="Минск" onChange={handleTownChange} autoComplete="off" />
      <SearchSuggestComponent town={townValue}/>    
    </div>  
    <div className="search-form-input mb-3">
    <label htmlFor="searchCategorySelect" className="form-label search-label">Категория
    </label>
    <select className="search-form-input-block form-select" id="searchCategorySelect">
      <option value="all">Все</option>
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