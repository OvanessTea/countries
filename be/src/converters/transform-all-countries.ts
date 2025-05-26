import { Country, CountryDetailsV3, CountryInfo, CountryV3 } from "../types/country";

const mapCountry = (country: CountryV3): CountryDetailsV3 => {
    return {
        name: country.name.common,
        flags: {
            svg: country.flags.svg,
            png: country.flags.png
        },
        capital: country.capital[0] || "",
        population: country.population,
        region: country.region,

    }
}

const compareCountryNames = (a: CountryDetailsV3, b: CountryDetailsV3): number => {
    return a.name.localeCompare(b.name);
}

const transformAllCountries = (countries: CountryV3[]) => {
    return countries.map(mapCountry).sort(compareCountryNames);
}

export default transformAllCountries;
