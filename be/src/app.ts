import express from "express";
import router from "./routes";
import cors from "cors";
import { errorHandler } from "./middlewares/error-handler";
import { initRedis } from "./redis/redis-client";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(errorHandler);

const run = async () => {
    try {
        await initRedis();
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error('Error on server init:', error);
    }
    
}

run();