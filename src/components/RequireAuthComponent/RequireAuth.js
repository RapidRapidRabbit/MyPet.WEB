import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../features/Hooks/useAuth";


const RequireAuth = ({children}) => {

    const auth = useAuth();   

    return auth.isAuthed ? children : <Navigate replace to='/signin'/>
}

export default RequireAuth;