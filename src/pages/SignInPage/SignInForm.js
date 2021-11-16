import "./SignInForm.css";
import React, { Fragment } from "react";
import  SignInFormComponent  from "../../components/SignInFormComponent/SignInFormComponent";
import Header from "../../components/HeaderComponent/HeaderComponent";





const SignInForm = () => {

  return <Fragment>    
  <Header/>     
  <SignInFormComponent/>       
            
  </Fragment>

  
  
}


export default SignInForm;
