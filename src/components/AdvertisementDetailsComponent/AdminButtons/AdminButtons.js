import "./AdminButtons.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import useAuth from "../../../features/Hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import ChangeAdStatusService from "../../../services/Http/ChangeAdStatus/ChangeAdStatus";
import { NavLink } from "react-router-dom";


const AdminButtons = ({adItem}) =>{

    const auth = useAuth();   
   // const [stateStatus, setNewStatus] = useState('')
    const newStatus = useRef('');
    const [content, setContent] = useState(null);


    const handleButtonClick = (e) => {        
        newStatus.current = e.currentTarget.value;    
        setContent(confirmButtons);
    }    

    const handleConfirmClick = (e) =>{   
        
        const model = {
            AdId: adItem.id,           
            Status: newStatus.current,
        }

        ChangeAdStatusService(model)
        .then(response=>{
            if(response.status >= 400)
                setContent(errorContent)
            else
                setContent(successContent)
        })
        .catch(error => {
            console.error(error);
            setContent(errorContent)
        })
        .finally(()=>{
            newStatus.current = '';
        })
    }

    const handleResetClick = (e) =>{
        setContent(adminButtons);
        newStatus.current = ''; 
    }

    const adminButtons = (
        <div className="admin-buttons-container">
        <div className="admin-buttons-block-header"><h5>Управление объявлением</h5></div>    
    {adItem.status === "OnModeration" && <button type="button" value="Approved" className="btn btn-success" onClick={handleButtonClick}>Одобрить <i className="bi bi-check-circle"></i></button>}
    {adItem.status === "Approved" && <button type="button" value="OnModeration" className="btn btn-warning" onClick={handleButtonClick}>На модерацию <i className="bi bi-exclamation-circle"></i></button>}
    <button type="button" value="Rejected" className="btn btn-danger" onClick={handleButtonClick}>Отклонить <i className="bi bi-dash-circle"></i></button>
    </div>
    )

    const confirmButtons = (
        <div className="admin-buttons-container">
        <div className="admin-buttons-block-header"><h5>Подтвердите действие</h5></div>
        <button type="button" className="btn btn-primary" onClick={handleConfirmClick}>Подтвердить</button>
        <button type="button" className="btn btn-secondary" onClick={handleResetClick}>Отменить</button>
        </div>
    )
    
    const successContent = <div className="alert alert-success confirm-alert-block">
  Статус объявления успешно изменен. <NavLink to="/moderation">Модерация</NavLink>. <NavLink to="/">На главную</NavLink> 
</div>
    const errorContent = <div className="alert alert-danger confirm-alert-block">
  Произошла ошибка, попробуйте позже.
</div>
    
    /* eslint-disable */
    useEffect(()=>{        
        setContent(adminButtons);
    },[auth.isAdmin])
    /* eslint-enable */    

    return auth.isAdmin ? content : null
}
export default AdminButtons;