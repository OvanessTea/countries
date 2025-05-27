import { NextFunction, Request, Response } from "express";
import { Country, CountryInfo, CountryV3 } from "../types/country";
import transformCountry from "../converters/transofrm-country";
import { NotFoundError } from "../errors/not-found-error";
import { BASE_URL } from "../constants/urls";
import getNeighbors from "../services/get-neighbors";
import transformAllCountries from "../converters/transform-all-countries";
import { cacheResponse } from "../redis/redis-utils";

export const getAllCountries = async (req: Request, res: Response) => {
    const response = await fetch(`${BASE_URL}/all?fields=name,capital,population,region,flags`);

    const data = await response.json();

    const transformedData = transformAllCountries(data);

    await cacheResponse(res, transformedData);

    res.send(transformedData);
};

export const getCountryByName = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;

    const response = await fetch(`${BASE_URL}/name/${name}`);

    const data: CountryV3[] = await response.json();

    if (!data[0]) return next(new NotFoundError("Country not found"));
    
    const codes = data[0].borders?.join(",") ?? "";
    let neighbors = [] as string[];

    if (codes) {
        neighbors = await getNeighbors(codes);
    }

    const country: CountryInfo = transformCountry(data[0]);
    country.neighbors = neighbors;

    await cacheResponse(res, country);

    res.send(country);
};