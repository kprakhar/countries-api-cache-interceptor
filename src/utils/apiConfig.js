import axios from "axios";
import addCacheInterceptor from "./apiCache";

const axiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getAxiosInstanceWithCache = () => {
    return addCacheInterceptor(axiosInstance)
};

export const HTTP = getAxiosInstanceWithCache();