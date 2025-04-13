import { useState } from "react";
import { HTTP } from "../utils/apiConfig";

const useCountry = (countryName) => {
    const [countryInfo, setCountryInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDataFromCache, setIsDataFromCache] = useState(false);

    const fetchCountry = async () => {
        setIsLoading(true);
        try {
            const response = await HTTP.get(`/name/${countryName}`);

            const { data = [] } = response;

            const [country] = data;
            const { capital = [] } = country;
            setCountryInfo({
                capital: capital[0],
            });
            setIsDataFromCache(response.cached);
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        fetchCountry,
        countryInfo,
        cacheInfo: {
            isCachedData: isDataFromCache
        }
    };
};

export default useCountry;