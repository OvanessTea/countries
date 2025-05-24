import { Request, Response } from "express";

const BASE_URL = "https://restcountries.com/v2";

export const getAllCountries = async (req: Request, res: Response) => {
    const response = await fetch(`${BASE_URL}/all?fields=name,capital,population,region,flags`);

    const data = await response.json();

    res.send(data);
};

export const getCountryByName = async (req: Request, res: Response) => {
    const { name } = req.params;

    const response = await fetch(`${BASE_URL}/name/${name}`);

    const data = await response.json();

    res.send(data);
};

export const getCountryByCode = async (req: Request, res: Response) => {
    const { codes } = req.query;

    const response = await fetch(`${BASE_URL}/alpha?codes=${codes}`);

    const data = await response.json();

    res.send(data);
};
