import "./ChangeAdFormComponent.css"
import "../../App.css";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { getJwtTokenData } from "../../services/GetJwtTokenData";
import { GetServerErrors } from "../../services/ServerValidationService/ServerValidationService";
import UpdateAdvertisementService from "../../services/UpdateAdvertisementService/UpdateAdService";






const ChangeAdFormComponent2 = (props) => {

  const [serverErrors, setServerError] = useState([]);

  const {
    register,
    handleSubmit, 
    formState: { errors },   
  } = useForm({ defaultValues:{
    PetName: props.aditem.petName,
    LocationTown: props.aditem.locationTown,
    LocationStreet: props.aditem.locationStreet,
    LocationHouse: props.aditem.locationHouse,
    Description: props.aditem.description,    
  }});

  const handleFormClick = (e) =>{    
    e.stopPropagation();    
  }

  const onSubmit = (data) => {     
    
    let jwtTokenData = getJwtTokenData();
    
    if(jwtTokenData == null){
      setServerError(["Сначала войдите или зарегистрируйтесь"]);
      return;
    }       
    
    let formData = new FormData();

    for (let key in data) {      
      formData.append(key, data[key]);      
    }
    formData.append("Image", data.Image[0]);
    formData.append("AdId", props.aditem.adId);
    
    
    
     UpdateAdvertisementService(formData)
     .then(responseData =>{
      
     try{ 
       
      if(responseData.status >= 400){  
        console.log(responseData);             
        let errorsArr = GetServerErrors(responseData.errors);
        setServerError(errorsArr);
       // setServerError([responseData.message]);
        return;        
      }else{
          
         window.location = "/myads";
      }     
              
     }
     catch{
      setServerError(["Something went wrong"]);
     }         
     });  
  }
 
 
const addAdForm = 
<div className="form-container" >
<div className="form-block" onClick={handleFormClick}>
<div className="errors-block">
{serverErrors && serverErrors.length > 0 && serverErrors.map((item, index) => 
<span className="error-message" key={index} >{item} <br/></span>)}
</div> 
<form onSubmit={handleSubmit(onSubmit)} noValidate>
<div className="mb-3">
  <label htmlFor="formFile" className="form-label">Фотография питомца
  </label>
  <input className="form-control" type="file" id="formFile" accept=".jpg,.jpeg,.png"
   {...register('Image', {                        
          })} 
  ></input>
  <div className="invalid-feedback">    
    {errors.Images && errors.Images.message}
    </div>     
</div>
<div className="mb-3">
  <label htmlFor="Category" className="form-label">Категория
  </label>
  <select className="form-select" id="categorySelect"
   {...register('Category', { 
        required: 'Обязательное поле',                       
          })} 
  >
    <option value="Lost">Потерян</option>
    <option value="Found">Найден</option>
  </select>
  <div className="invalid-feedback">    
    {errors.Category && errors.Category.message}
    </div>     
</div>
  <div className="mb-3">
  <label htmlFor="FormControlInput1" className="form-label">Как его зовут?</label>
  <input type="text" className={"form-control " + (errors.PetName  ? "is-invalid" : '')} id="FormControlInput1" placeholder="Мурзик"
   {...register('PetName', {
            required: 'Обязательное поле',
            minLength: {
              value: 2,
              message: 'Минимальная длина - 2 символа',
            },
          })}
  ></input>
  <div className="invalid-feedback">    
    {errors.PetName && errors.PetName.message}
    </div>     
  </div>
  <div className="mb-3">
  <label htmlFor="searchRegionSelect" className="form-label">Область</label>
  <select className="search-form-input-block form-select" id="searchRegionSelect"
  {...register('LocationRegion', {
            required: 'Обязательное поле',            
          })}
  >      
      <option value="Minsk">Минская</option>
      <option value="Brest">Брестская</option>
      <option value="Gomel">Гомельская</option>
      <option value="Grodno">Гродненская</option>
      <option value="Mogilev">Могилевская</option>
      <option value="Vitebsk">Витебская</option>
    </select>  
  <div className="invalid-feedback">    
    {errors.LocationRegion && errors.LocationRegion.message}
    </div>     
</div>
<div className="mb-3">
  <label htmlFor="FormControlInput2" className="form-label">Ваш город</label>
  <input type="text" className={"form-control " + (errors.LocationTown  ? "is-invalid" : '')} id="FormControlInput2" placeholder="Минск"
  {...register('LocationTown', {
            required: 'Обязательное поле',
            minLength: {
              value: 3,
              message: 'Минимальная длина - 3 символа',
            },
          })}
  ></input>
  <div className="invalid-feedback">    
    {errors.LocationTown && errors.LocationTown.message}
    </div>     
</div>
<div className="mb-3">
  <label htmlFor="FormControlInput3" className="form-label">Улица</label>
  <input type="text" className={"form-control " + (errors.LocationStreet  ? "is-invalid" : '')} id="FormControlInput3" placeholder="Ленина"
  {...register('LocationStreet', {
            required: 'Обязательное поле',
            minLength: {
              value: 3,
              message: 'Минимальная длина - 3 символа',
            },
          })}
  ></input>
  <div className="invalid-feedback">    
    {errors.LocationStreet && errors.LocationStreet.message}
    </div>     
</div>
<div className="mb-3">
  <label htmlFor="FormControlInput4" className="form-label">Номер дома (попробуем показать на карте)</label>
  <input type="text" className={"form-control " + (errors.LocationHouse  ? "is-invalid" : '')} id="FormControlInput4" placeholder="1"
  {...register('LocationHouse', {
            required: 'Обязательное поле',           
          })}
  ></input>
  <div className="invalid-feedback">    
    {errors.LocationHouse && errors.LocationHouse.message}
    </div>     
</div>
<div className="mb-3">
  <label htmlFor="FormControlTextarea1" className="form-label">Какое-нибудь описание</label>
  <textarea className={"form-control " + (errors.Description  ? "is-invalid" : '')} id="FormControlTextarea1" rows="3"
  {...register('Description', {
            required: 'Обязательное поле',
            minLength: {
              value: 3,
              message: 'Минимальная длина - 3 символа',
            },
          })}
  ></textarea>
  <div className="invalid-feedback">    
    {errors.LocationStreet && errors.LocationStreet.message}
    </div>     
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>




  return addAdForm; 
  
}


export default ChangeAdFormComponent2;
