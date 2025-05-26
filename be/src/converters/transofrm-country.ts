import { extractValues } from "../helpers/extract-values";
import { CountryInfo, CountryV3 } from "../types/country";

const extractNativeName = (nativeName: { [key: string]: { official: string; common: string; }; }) => {
    return nativeName[Object.keys(nativeName)[0]].common;
}

const extractCurrencies = (currencies: { [key: string]: { symbol: string; name: string; }; }) => {
    return Object.values(currencies).map((currency) => currency.name);
}

const transformCountry = (country: CountryV3): CountryInfo => {
    return {
        name: country.name.common,
        nativeName: extractNativeName(country.name.nativeName),
        flag: country.flags.svg,
        capital: country?.capital && country?.capital[0] || "NOT FOUND",
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        topLevelDomain: country.tld,
        currencies: extractCurrencies(country.currencies),
        languages: extractValues(country.languages),
    }
}

export default transformCountry;