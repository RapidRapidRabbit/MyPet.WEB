import { myPetApi } from "../../services/Hosts";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../AdCard/AdCard.css";
import "./MyAdCard.css";
import React, { useState, Fragment } from "react";
import WhiteOverlay from "../WhiteOverlay/WhiteOverlay";
import ChangeAdFormComponent from "../ChangeAdFormComponent/ChangeAdFormComponent";



export const MyAdCard = ({item}) =>{

  const [isShow, ToggleOverlayShow] = useState(false);
 
    
const handleChangeClick = (e) =>{    
    ToggleOverlayShow(!isShow);
}
const handleDeleteClick = (e) =>{    
    setButtons(confirmButtons);
}
const handleConfirmClick = (e) =>{    
    
}
const handleResetClick = (e) =>{    
    setButtons(buttons);
}

const buttons = <div className="bottom-card-block card-buttons">
  <button className="btn btn-outline-primary btn-sm" onClick={handleChangeClick}>Изменить <i className="bi bi-pen"></i></button>
  <button className="btn btn-outline-danger btn-sm" onClick={handleDeleteClick}>Удалить <i className="bi bi-trash"></i></button>          
</div>

 const confirmButtons = <div className="bottom-card-block card-buttons">
 <button className="btn btn-outline-primary btn-sm" onClick={handleConfirmClick}>Подтвердить</button>
 <button className="btn btn-outline-primary btn-sm" onClick={handleResetClick}>Отмена</button>          
</div>     

const [currentButtons, setButtons] = useState(buttons) 
    
    return<Fragment> <div className="card custom-card">
        <img src={myPetApi+item.images[0].path} className="card-img-top custom-img" alt=":("></img>
    <div className="card-body custom-card-body">
      <h5 className="card-title custom-card-title">{item.petName}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.locationTown + ', ' + item.locationStreet}</h6>
      <p className="card-text custom-card-text">{item.description}</p>      
    </div>
        {currentButtons}
      </div>
      <WhiteOverlay setShow = {isShow} changeParentState = {handleChangeClick}><ChangeAdFormComponent aditem = {item}/></WhiteOverlay>
      </Fragment>
    }