export type Country = {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    flags: {
        svg: string;
        png: string;
    };
    currencies: {
        code: string;
        name: string;
        symbol: string;
    }[];
    languages: {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }[];
    translations: {
        [key: string]: string;
    };
    flag: string;
    regionalBlocs: {
        acronym: string;
        name: string;
    }[];
    cioc: string;
    independent: boolean;
}

export type CountryV3 = {
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [key: string]: {
            symbol: string;
            name: string;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: {
        eng: {
            f: string;
            m: string;
        };
        fra: {
            f: string;
            m: string;
        };
    };
    cca3: string;
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    fifa: string;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    coatOfArms: {
        png: string;
        svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
        latlng: number[];
    };
    postalCode: {
        format: string | null;
        regex: string | null;
    };
}

export type CountryInfo = {
    name: string;
    nativeName: string;
    flag: string;
    capital: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: string[];
    languages: string[];
    neighbors?: string[];
}    

export type CountryInfoV3 = {
    name: string,
    capital: string,
    population: number,
    region: string,
    flags: {
        svg: string,
        png: string
    }
}