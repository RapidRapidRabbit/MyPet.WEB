import { myPetApi } from "../../services/Hosts";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./MyAdCard.css";
import React, { useState, Fragment } from "react";
import DeleteAdService from "../../services/DeleteAdvertisementService/DeleteAdService";
import { getJwtTokenData } from "../../services/GetJwtTokenData";
import switchCategory from "../../services/SwitchCategory/SwitchCategory";
import { NavLink } from "react-router-dom";



export const MyAdCard = ({item}) =>{

const handleDeleteClick = (e) =>{    
    setButtons(confirmButtons);
}
const handleConfirmDeleteClick = (e) =>{  

  let jwtTokenData = getJwtTokenData();
    
  if(jwtTokenData == null){   
    return;
  }

  DeleteAdService(item.id).then(responseData => {

    try{

      if(responseData.status >= 400){
        return;
      }
        console.log(responseData);
        window.location = "/myads";

    }
    catch (err){
        console.error(err);
    }
  })
}
const handleResetClick = (e) =>{    
    setButtons(buttons);
}

const buttons = <div className="bottom-card-block card-buttons">
  
  <NavLink 
            className="btn btn-outline-primary btn-sm"          
            to={`/ChangeAdvertisement/${item.id}/${item.petName}/${item.locationTown}/${item.locationStreet}/${item.locationHouse}/${item.description}`}>
            Изменить <i className="bi bi-pen"></i>
  </NavLink>
  <button className="btn btn-outline-danger btn-sm" onClick={handleDeleteClick}>Удалить <i className="bi bi-trash"></i></button>          
</div>

 const confirmButtons = <div className="bottom-card-block card-buttons">
 <button className="btn btn-outline-primary btn-sm" onClick={handleConfirmDeleteClick}>Подтвердить</button>
 <button className="btn btn-outline-primary btn-sm" onClick={handleResetClick}>Отмена</button>          
</div>     

const [currentButtons, setButtons] = useState(buttons) 
    
    return<Fragment> <div className="card custom-card users-card">
        <img src={myPetApi+item.images[0].path} className="card-img-top custom-img" alt=":("></img>
    <div className="card-body custom-card-body">
      <h5 className="card-title custom-card-title">{switchCategory(item.category) + ' ' + item.petName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.locationTown + ', ' + item.locationStreet + ' ' + item.locationHouse}</h6>
      <p className="card-text custom-card-text">{item.description}</p>
            
    </div>
        {currentButtons}
      </div>      
      </Fragment>
    }