import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../features/Hooks/useAuth";


const RequireNotAuth = ({children}) => {

    const auth = useAuth();   

    return !auth.isAuthed ? children : <Navigate replace to='/'/>
}

export default RequireNotAuth;