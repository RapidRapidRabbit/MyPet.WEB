import { myPetApi } from "../../services/Hosts";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./MyAdCard.css";
import React, { useState, Fragment } from "react";
import DeleteAdService from "../../services/Http/DeleteAdvertisementService/DeleteAdService";
import switchCategory from "../../services/SwitchCategory/SwitchCategory";
import { NavLink, useNavigate } from "react-router-dom";
import UnathorizedAccessError from "../../features/CustomExceptions/Http/UnathorizedAccessError";
import ForbiddenAccessError from "../../features/CustomExceptions/Http/ForbiddenAccessError";
import useAuth from "../../features/Hooks/useAuth";


export const MyAdCard = ({item}) =>{

  const navigate = useNavigate();
  const auth = useAuth();

const handleDeleteClick = (e) =>{    
    setButtons(confirmButtons);
}
const handleConfirmDeleteClick = (e) =>{ 

  DeleteAdService(item.id)
  .then(responseData => {

      if(responseData.status >= 400){
        return;
      }        
      navigate('/myads');     
  })
  .catch(error => {
    if(error instanceof UnathorizedAccessError || error instanceof ForbiddenAccessError){
      auth.logOut();
      navigate('/signin') 
    }
    console.error(error);
  })
  .finally(()=>{
    //do something
  })
}
const handleResetClick = (e) =>{    
    setButtons(buttons);
}

const ChangeStatusString = (status) =>{
    switch(status){
        case 'Approved':
            return "Одобрено";
        case 'OnModeration':
            return "На проверке";
        case 'Rejected':
            return "Отклонено";
        default:
            return 'Неизвестен';            
    }
}

const buttons = <Fragment>
  
  <NavLink 
            className="btn btn-outline-primary btn-sm"          
            to={`/ChangeAdvertisement/${item.id}/${item.petName}/${item.locationTown}/${item.locationStreet}/${item.locationHouse}/${item.description}`}>
            Изменить <i className="bi bi-pen"></i>
  </NavLink>
  <button className="btn btn-outline-danger btn-sm" onClick={handleDeleteClick}>Удалить <i className="bi bi-trash"></i></button>
  </Fragment>          


 const confirmButtons = <Fragment>
 <button className="btn btn-outline-primary btn-sm" onClick={handleConfirmDeleteClick}>Подтвердить</button>
 <button className="btn btn-outline-primary btn-sm" onClick={handleResetClick}>Отмена</button>
 </Fragment>         
    

const [currentButtons, setButtons] = useState(buttons) 
    
    return<Fragment> <div className="card custom-card users-card">
        <img src={myPetApi+item.images[0].path} className="card-img-top custom-img" alt=":("></img>
    <div className="card-body custom-card-body">
      <h5 className="card-title custom-card-title">{switchCategory(item.category) + ' ' + item.petName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.locationTown + ', ' + item.locationStreet + ' ' + item.locationHouse}</h6>
      <p className="card-text custom-card-text">{item.description}</p>

      <div className="ad-status-block">
        <span>Статус:
         {item.status === "Approved" && <span className="approved-status"> {ChangeStatusString(item.status)}</span>}
         {item.status === "OnModeration" && <span className="onmoderation-status"> {ChangeStatusString(item.status)}</span>}
         {item.status === "Rejected" && <span className="rejected-status"> {ChangeStatusString(item.status)}</span>}
         </span>
      </div>     
    </div>
    <div className="bottom-card-block card-buttons">
      {currentButtons}
    </div>     
        
      </div>      
      </Fragment>
    }