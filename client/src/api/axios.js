import axios from 'axios';
//import { accountService } from '../services/account.service';


const BASE_URL = 'http://localhost:3001';

const Axios = axios.create({
    baseURL: BASE_URL,
});

//Interceptor to set token in request
// Axios.interceptors.request.use(
//     (request) => {
//         if (accountService.isLogged()) {
//             request.headers.Authorization = `Bearer ${accountService.getToken()}`;
//         }

//         return request;
//     }
// );

// //Interceptor of response to check the session
// Axios.interceptors.response.use(
//     (response) => {
//         return response;
//     }, (error) => {
//         if (error.response.status === 401) {
//             accountService.logout();
//             window.location = '/auth/login'
//         } else {
//             return Promise.reject(error)
//         }
//     }
// );


export default Axios;