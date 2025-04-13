import Country from "./Country";

const CountryList = ({ countries }) => {
    return (

        <div className="countries">
            {countries.map((country) => (
                <Country key={country} country={country} />
            ))}
        </div>
    );
};

export default CountryList;
