import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": 'application/json',
    },
    withCredentials: false,
    params: {
        access_token: 'process.env.SECRET_TOKEN'
    }
});