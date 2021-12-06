import { myPetApi } from "../../services/Hosts";
import "./AdCard.css";
import switchCategory from "../../services/SwitchCategory/SwitchCategory";
import { NavLink } from "react-router-dom";


export const AdCard = ({item}) =>{

let date = new Date(item.publicationDate);

return <div className="card custom-card">
    <img src={myPetApi+item.images[0].path} className="card-img-top custom-img" alt=":("></img>
    <div className="card-body custom-card-body">
      <h5 className="card-title custom-card-title">{switchCategory(item.category) + ' ' + item.petName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.locationTown + ', ' + item.locationStreet + ' ' + item.locationHouse}</h6>
      <p className="card-text custom-card-text">{item.description}</p>      
    </div>
    <div className="bottom-card-block">
  <NavLink 
            className="btn btn-primary btn-sm"          
            to={`/AdvertisementDetails/${item.id}`}>
            Подробности
  </NavLink>
      <span className="card-text date-text"><small className="text-muted">{date.toLocaleDateString("ru")}</small></span>
      </div>     
  </div>
}