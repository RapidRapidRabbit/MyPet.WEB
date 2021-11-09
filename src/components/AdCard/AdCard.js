import { myPetApi } from "../../services/Hosts";
import "./AdCard.css";


export const AdCard = ({item}) =>{

let date = new Date(item.publicationDate);

return <div className="card">
    <img src={myPetApi+item.images[0].path} class="card-img-top custom-img" alt="..."></img>
    <div className="card-body custom-card-body">
      <h5 className="card-title custom-card-title">{item.petName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.locationTown + ', ' + item.locationStreet}</h6>
      <p className="card-text custom-card-text">{item.description}</p>      
    </div>
    <div className="bottom-card-block">
      <button className="btn btn-primary btn-sm">Подробности</button>
      <span className="card-text date-text"><small class="text-muted">{date.toLocaleDateString("ru")}</small></span>
      </div>     
  </div>
}