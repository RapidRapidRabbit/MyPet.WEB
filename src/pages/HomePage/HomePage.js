import { Fragment } from "react";
import AdCardContainer from "../../components/AdCardsContainer/AdCardContainer";
import Header from "../../components/HeaderComponent/HeaderComponent";
import useAuth from "../../features/Hooks/useAuth";
import "./HomePage.css";




const HomePage = () => {
    
    const auth = useAuth()

    console.log(auth.isAuthed)

   
    
    

    
    
  
    return <Fragment>    
    <Header/>
    <AdCardContainer/>            
          </Fragment>
    
}
export default HomePage;