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
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import useAuth from "./features/Hooks/useAuth";
import Loader from "./components/Loader/Loader";
import RequireAuth from "./components/RequireAuthComponents/RequireAuth";
import RequireNotAuth from "./components/RequireAuthComponents/RequireNotAuth";
import RequireAdmin from "./components/RequireAuthComponents/RequireAdminComponent";
import ChatPage from "./pages/ChatPage/ChatPage";
import ModerationPage from "./pages/ModerationPage/ModerationPage";



const Router = () => {

    const auth = useAuth()
    

    return auth.isLoaded ? (<BrowserRouter>
    <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/mainpage" element = {<HomePage/>} />
        <Route path = "/SignUp" element = {<RequireNotAuth><SignUpForm/></RequireNotAuth>} /> {/*guest*/}
        <Route path = "/SignIn" element = {<RequireNotAuth><SignInForm/></RequireNotAuth>} /> {/*guest*/}
        <Route path = "/AddAdvertisement" element = {<RequireAuth><AddAdvertisementPage/></RequireAuth>} />   {/*private*/} 
        <Route path = "/ChangeAdvertisement/:adId/:petName/:locationTown/:locationStreet/:locationHouse/:description" element = {<RequireAuth><ChangeAdvertisementPage/></RequireAuth>} />  {/*private*/}
        <Route path = "/MyAds" element = {<RequireAuth><MyAdsPage/></RequireAuth>} />  {/*private*/}
        <Route path = "/AdvertisementDetails/:adId" element = {<AdvertisementDetailsPage/>} /> 
        <Route path = "/emailConfirmation/" element = {<EmailConfirmedPage/>} />
        <Route path = "/errorPage/" element = {<ErrorPage/>} />

        <Route path="/chat" element={<RequireAuth><ChatPage/></RequireAuth>} />

         <Route path = "/moderation/" element = {<RequireAdmin><ModerationPage/></RequireAdmin>} /> {/*admin route*/}

        <Route path="*" element={<HomePage/>} />              
    </Routes>
    </BrowserRouter>
    ) : (
        <Loader setShow={true}/>
    );       
}

export default Router;