import { createContext } from "react";

export const AuthContext = createContext({
    isLoaded: false,
    isAuthed: false,
    userData: null,
    logIn: () => {},
    logOut: () => {},    
})