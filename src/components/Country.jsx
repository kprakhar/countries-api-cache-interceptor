import CountryInfo from "./CountryInfo";

import useCountry from "../hooks/useCountry";

const Country = ({ country }) => {
    const { isLoading, fetchCountry, countryInfo, cacheInfo } = useCountry(country);
    const { isCachedData } = cacheInfo

    return (
        <div className="card">
            <div className="cardContent">
                <h2 className="content">{country}</h2>
                <button disabled={isLoading || !!countryInfo} onClick={fetchCountry} className="btn">
                    {isLoading ? 'Loading...' : 'Load Info'}
                </button>
            </div>
            {<CountryInfo countryInfo={countryInfo} fromCache={isCachedData} />}
        </div>
    )
}

export default Country;
