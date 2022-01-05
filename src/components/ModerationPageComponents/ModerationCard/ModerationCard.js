import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./ModerationCard.css";
import { myPetApi } from "../../../services/Hosts";


const ModerationCard = ({item}) =>{

    const date = new Date(item.publicationDate)

    return <Fragment>    
    <div className="card mb-3 moderation-card  w-75">
  <div className="row g-0">
    <div className="col-md-4 img-col">
      <img src={myPetApi+item.images[0].path} className="img-fluid rounded-start moderation-img" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <div className="moderation-line-block"><div className="moderation-line-name">Кто опубликовал:</div> <div className="moderation-line-value">{item.userName}</div></div>
      <div className="moderation-line-block"><div className="moderation-line-name">Email:</div> <div className="moderation-line-value">{item.userEmail}</div></div>
      <div className="moderation-line-block"><div className="moderation-line-name">Дата публикации:</div> <div className="moderation-line-value">{date.toLocaleDateString('ru')}</div></div>       
              
        <NavLink className="btn btn-primary moderation-details-button" to={`/AdvertisementDetails/${item.id}`}> Подробности </NavLink>
      </div>
    </div>
  </div>
</div> 
</Fragment>
}

export default ModerationCard;