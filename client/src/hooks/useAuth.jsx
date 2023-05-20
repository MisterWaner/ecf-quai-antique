import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const {auth} = useContext(AuthContext);
    useDebugValue(auth, auth?.user ? "Connecté" : "Déconnecté")
    return useContext(AuthContext);
}

export default useAuth;