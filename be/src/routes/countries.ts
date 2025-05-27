import { Router } from "express";
import { getAllCountries, getCountryByName } from "../controllers/countries";
import { publicCache } from "../middlewares/public-cache";
const router = Router();

router.get("/", [publicCache], getAllCountries);
router.get("/name/:name", [publicCache], getCountryByName);

export default router;
