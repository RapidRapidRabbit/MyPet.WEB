import { Fragment } from "react";
import { changeCategory, changeRegion } from "../../../services/ValuesLocalization/ValuesLocalization"
import { myPetApi } from "../../../services/Hosts";
import "./AdDetailsViewComponent.css"

const AdDetailsViewComponent = ({item}) => {

    let date = new Date(item.publicationDate)

    return <Fragment>
        <img src={myPetApi + item.images[0].path} className="details-img" alt=":("></img> 

        <div className="line-block"><div className="line-name">Дата публикации:</div> <div className="line-value">{date.toLocaleDateString("ru")}</div></div>       
        <div className="line-block"><div className="line-name">Имя питомца:</div> <div className="line-value">{item.petName}</div></div> 
        <div className="line-block"><div className="line-name">Категория:</div> <div className="line-value">{changeCategory(item.category)}</div></div>
        <div className="line-block"><div className="line-name">Область:</div> <div className="line-value">{changeRegion(item.locationRegion)}</div></div>          
        <div className="line-block"><div className="line-name">Адрес:</div> <div className="line-value">{item.locationTown + ', ' + item.locationStreet + ' ' + item.locationHouse}</div></div>
        <div className="line-block"><div className="line-name description">Описание:</div><div className="description-value">{item.description}</div></div>
        <div className="line-block"><div className="line-name">Кто опубликовал:</div> <div className="line-value">{item.userName}</div></div> 
    </Fragment>

}
export default AdDetailsViewComponent