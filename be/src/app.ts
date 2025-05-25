import express from "express";
import router from "./routes";
import cors from "cors";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});