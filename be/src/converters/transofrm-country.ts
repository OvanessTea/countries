import { Country } from "../types/country";
import extractNames from "../helpers/extract-names";

const transformCountry = (country: Country) => {
    return {
        name: country.name,
        nativeName: country.nativeName,
        flag: country.flags.png,
        capital: country.capital,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        topLevelDomain: country.topLevelDomain,
        currencies: extractNames(country.currencies),
        languages: extractNames(country.languages),
        borders: country.borders,
    }
}

export default transformCountry;