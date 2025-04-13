const CountryInfo = ({ countryInfo = {}, fromCache }) => {

    if (!countryInfo) {
        return <div className="helpText content">Please load the data...</div>
    }

    const { capital } = countryInfo;

    return <div className="countryInfo">
        <p className="label">Capital: <span className="content">{capital}</span></p>
        <span className="cacheText">{fromCache && 'Data loaded from cache'}</span>
    </div>
}

export default CountryInfo;
