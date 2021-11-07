import React from "react";
import AdCardContainer from "../../components/AdCard/AdCardContainer";
import Header from "../../components/HeaderComponent/HeaderComponent";
import "./HomePage.css";
import { setCookie } from "../../services/GetSetCookieService";



 


const HomePage = () => {     
    
   // setCookie("jwttoken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZ0BtYWlsLnJ1IiwidW5pcXVlX25hbWUiOiJmMzE0ZDY1Mi0zZDI1LTRhZTUtYTM4My1iNDM2OGUwODczNWYiLCJleHAiOjE2MzYzMDI4OTEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCJ9.814Cwc1aQU2P2WThT5Dd-kRq3pHIiQVEXcTWUIxI4Lo");
    return <div>    
    <Header/>  
    <AdCardContainer/>       
        this is HomePage!    
    </div>
    
}
export default HomePage;