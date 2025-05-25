import { NextFunction, Request, Response } from "express";
import { Country, CountryInfo } from "../types/country";
import transformCountry from "../converters/transofrm-country";
import { NotFoundError } from "../errors/not-found-error";

const BASE_URL = "https://restcountries.com/v2";

export const getAllCountries = async (req: Request, res: Response) => {
    const response = await fetch(`${BASE_URL}/all?fields=name,capital,population,region,flags`);

    const data = await response.json();

    res.send(data);
};

export const getCountryByName = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;

    const response = await fetch(`${BASE_URL}/name/${name}`);

    const data: Country[] = await response.json();

    if (!data[0]) return next(new NotFoundError("Country not found"));
    
    const country: CountryInfo = transformCountry(data[0]);

    res.send(country);
};

export const getCountryByCode = async (req: Request, res: Response) => {
    const { codes } = req.query;

    const response = await fetch(`${BASE_URL}/alpha?codes=${codes}`);

    const data = await response.json();

    res.send(data);
};
