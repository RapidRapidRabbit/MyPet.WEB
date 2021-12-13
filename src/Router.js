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



const Router = () => {
    return <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/mainpage" element = {<HomePage/>} />
        <Route path = "/SignUp" element = {<SignUpForm/>} />
        <Route path = "/SignIn" element = {<SignInForm/>} />
        <Route path = "/AddAdvertisement" element = {<AddAdvertisementPage/>} />   
        <Route path = "/ChangeAdvertisement/:adId/:petName/:locationTown/:locationStreet/:locationHouse/:description" element = {<ChangeAdvertisementPage/>} />
        <Route path = "/MyAds" element = {<MyAdsPage/>} />
        <Route path = "/AdvertisementDetails/:adId" element = {<AdvertisementDetailsPage/>} />
        <Route path = "/emailConfirmation/" element = {<EmailConfirmedPage/>} />
        <Route path="*" element={<HomePage/>} />               
    </Routes>
    </BrowserRouter>
}

export default Router;