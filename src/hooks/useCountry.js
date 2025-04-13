import { useState } from "react";
import { HTTP } from "../utils/apiConfig";

const useCountry = (countryName) => {
    const [countryInfo, setCountryInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDataFromCache, setIsDataFromCache] = useState(false);

    const fetchCountry = async () => {
        setIsLoading(true);
        try {
            const response = await HTTP.get(`/capital/q?country=${countryName}`);

            const { data = {} } = response.data ?? {};

            const { capital } = data;
            setCountryInfo({
                capital: capital,
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