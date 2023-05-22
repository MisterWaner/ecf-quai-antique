import Axios from "../api/axios";
import jwt_decode from "jwt-decode";

//connection to the api
let login = (credentials) => {
    return Axios.post("/auth/login", credentials);
};

//save the token in localStorage
let saveToken = (token) => {
    localStorage.setItem("token", token);
};

//token deletion
let logout = () => {
    localStorage.removeItem("token");
};

//check if token is present in localStorage
let isLogged = () => {
    let token = localStorage.getItem("token");
    return !!token;
};

//recovery of token in localStorage
let getToken = () => {
    return localStorage.getItem("token");
};

//recovery of token info
let getTokenInfo = () => {
    return jwt_decode(getToken());
};

export const accountService = {
    login,
    saveToken,
    logout,
    isLogged,
    getToken,
    getTokenInfo,
};
