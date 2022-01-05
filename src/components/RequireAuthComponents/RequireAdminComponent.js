import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../features/Hooks/useAuth";


const RequireAdmin = ({children}) => {

    const auth = useAuth();   

    return auth.isAdmin ? children : <Navigate replace to='/'/>
}

export default RequireAdmin;