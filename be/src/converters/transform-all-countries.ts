import { Country, CountryInfoV3, CountryV3 } from "../types/country";

const mapCountry = (country: CountryV3): CountryInfoV3 => {
    return {
        name: country.name.common,
        capital: country.capital[0],
        population: country.population,
        region: country.region,
        flags: {
            svg: country.flags.svg,
            png: country.flags.png
        }
    }
}

const compareCountryNames = (a: CountryInfoV3, b: CountryInfoV3): number => {
    return a.name.localeCompare(b.name);
}

const transformAllCountries = (countries: CountryV3[]) => {
    return countries.map(mapCountry).sort(compareCountryNames);
}

export default transformAllCountries;
