import { createClient } from "redis";

const redisClient = createClient({
    url: 'redis://localhost:6379'
});

export const initRedis = async () => {
    redisClient.on('error', (err) => {
        console.log('Redis Error: ', err);
    });

    redisClient.on('connect', () => {
        console.log('Redis client is connected');
    });

    await redisClient.connect();
}

export default redisClient;
