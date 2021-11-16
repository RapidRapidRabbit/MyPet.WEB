import { Fragment } from "react";
import AddAdvertisementFormComponent from "../../components/AddAdvertisementFormComponent/AddAdvertisementFormComponent";
import "./AddAdvertisementPage.css";
import Header from "../../components/HeaderComponent/HeaderComponent";
 


const AddAdvertisementPage = () => {     
  
    return <Fragment>
           <Header/>           
           <AddAdvertisementFormComponent/>
          </Fragment>
    
}
export default AddAdvertisementPage;