import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import SignUpForm from "./pages/SignUpForm/SignUpForm";
import SignInForm from "./pages/SignInPage/SignInForm";
import AddAdvertisementPage from "./pages/AddAdvertisementPage/AddAdvertisementPage";
import MyAdsPage from "./pages/MyAdsPage/MyAdsPage";
import ChangeAdvertisementPage from "./pages/ChangeAdvertisementPage/ChangeAdvertisementPage";
import AdvertisementDetailsPage from "./pages/AdvertisementDetailsPage/AdvertisementDetailsPage";
import EmailConfirmedPage from "./pages/EmailConfirmedPage/EmailConfirmedPage";
//import RequireAuth from "./components/RequireAuthComponent/RequireAuth";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ChatsWindowComponent from "./components/Chat/ChatsWindowComponent";
import useAuth from "./features/Hooks/useAuth";
import Loader from "./components/Loader/Loader";





const Router = () => {

    const auth = useAuth()
    

    return auth.isLoaded ? (<BrowserRouter>
    <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/mainpage" element = {<HomePage/>} />
        <Route path = "/SignUp" element = {<SignUpForm/>} />
        <Route path = "/SignIn" element = {<SignInForm/>} />
        <Route path = "/AddAdvertisement" element = {<AddAdvertisementPage/>} />   {/*private*/} 
        <Route path = "/ChangeAdvertisement/:adId/:petName/:locationTown/:locationStreet/:locationHouse/:description" element = {<ChangeAdvertisementPage/>} />  {/*private*/}
        <Route path = "/MyAds" element = {<MyAdsPage/>} />  {/*private*/}
        <Route path = "/AdvertisementDetails/:adId" element = {<AdvertisementDetailsPage/>} /> 
        <Route path = "/emailConfirmation/" element = {<EmailConfirmedPage/>} />
        <Route path = "/errorPage/" element = {<ErrorPage/>} />
        <Route path="*" element={<HomePage/>} />
       
        <Route path="/chat" element={<ChatsWindowComponent/>} />               
    </Routes>
    </BrowserRouter>
    ) : (
        <Loader setShow={true}/>
    );
       
}

export default Router;