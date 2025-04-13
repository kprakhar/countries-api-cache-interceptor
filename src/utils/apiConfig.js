import axios from "axios";
import addCacheInterceptor from "./apiCache";

// Creates an axios instance for the REST Countries API
const axiosInstance = axios.create({
    baseURL: 'https://countriesnow.space/api/v0.1/countries',
    headers: {
        'Content-Type': 'application/json'
    }
})

// Apply caching to the axios instance and return it
export const getAxiosInstanceWithCache = () => {
    return addCacheInterceptor(axiosInstance)
};

// Export the configured HTTP client
export const HTTP = getAxiosInstanceWithCache();