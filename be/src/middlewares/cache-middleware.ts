import { Request, Response, NextFunction } from "express";
import { getCache } from "../redis/redis-utils";
import { CacheError } from "../errors/cache-error";

export const cacheMiddleware = (ttl: number = 60) => async (req: Request, res: Response, next: NextFunction) => {
    const cacheKey = req.originalUrl;
    
    try {
        const cachedData = await getCache(cacheKey);

        if (cachedData) {
            res.send(cachedData);
            return;
        }

        res.locals.cacheKey = cacheKey;
        res.locals.ttl = ttl;

        next();
    } catch (err) {
        console.error(`Error fetching cache for ${cacheKey}:`, err);
        next(new CacheError("Error fetching cache"));
    }
}