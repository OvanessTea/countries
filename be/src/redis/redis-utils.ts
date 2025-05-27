import { Response } from "express";
import redisClient from "./redis-client";

export const setCache = async (key: string, data: any, ttl = 60) => {
    await redisClient.set(key, JSON.stringify(data), {
        EX: ttl
    });
}

export const cacheResponse = async (res: Response, data: any) => {
    if (res.locals.cacheKey) {
        await setCache(res.locals.cacheKey, data, res.locals.ttl);
    }
}

export const getCache = async (key: string) => {
    const data = await redisClient.get(key);

    if (!data) {
        return null;
    }

    return JSON.parse(data);
}
