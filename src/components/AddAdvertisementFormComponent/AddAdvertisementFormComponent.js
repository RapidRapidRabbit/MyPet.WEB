import "./AddAdvertisementFormComponent.css";
import "../../App.css";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import AddAdvertisementService from "../../services/Http/AddAdvertisementService/AddAdvertisementService";
import { GetServerErrors } from "../../services/ServerValidationService/ServerValidationService";
import { useNavigate } from "react-router";
import useAuth from '../../features/Hooks/useAuth';
import UnathorizedAccessError from "../../features/CustomExceptions/Http/UnathorizedAccessError";






const AddAdvertisementFormComponent = () => {

  const [serverErrors, setServerError] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const navigate = useNavigate();
  const auth = useAuth()

  const {
    register,
    handleSubmit, 
    formState: { errors },   
  } = useForm();

  const onSubmit = (data) => {

    setIsLoaded(false);
    let formData = new FormData();

    for (let key in data) {      
      formData.append(key, data[key]);      
    }
    formData.append("Image", data.Image[0]);  
    
     AddAdvertisementService(formData)
     .then(responseData =>{
      
      if(responseData.status === 400){                
        let errorsArr = GetServerErrors(responseData.errors);
        setServerError(errorsArr);
        setIsLoaded(true);
        return;        
      }              
       navigate("/myads");              
     })
     .catch(error => {
        if(error instanceof UnathorizedAccessError){
          auth.logOut();
          navigate('/signin');
        }
        else{
          setServerError(["Что-то пошло не так, попробуйте позже"]);
          setIsLoaded(true);
        }
     })   
  }
 
 
const addAdForm = 
<div className="form-container" >
<div className="form-block">
<div className="errors-block">
{serverErrors && serverErrors.length > 0 && serverErrors.map((item, index) => 
<span className="error-message" key={index} >{item} <br/></span>)}
</div> 
<form onSubmit={handleSubmit(onSubmit)} noValidate>
<div className="mb-3">
  <label htmlFor="formFile" className="form-label">Фотография питомца
  </label>
  <input className={"form-control " + (errors.Image  ? "is-invalid" : '')} type="file" id="formFile"
   {...register('Image', { 
     required: 'Обязательное поле',                       
          })} 
  ></input>
  <div className="invalid-feedback">    
    {errors.Image && errors.Image.message}
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
  <label htmlFor="FormControlInput4" className="form-label">Номер дома</label>
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
  <button type="submit" className="btn btn-primary">Отправить {!isLoaded && <span className="spinner-border spinner-border-sm"></span>}</button>
</form>
</div>
</div>




  return addAdForm; 
  
}


export default AddAdvertisementFormComponent;
