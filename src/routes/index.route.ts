import { Router } from "express";
import { getIndex } from "../controllers/index.controller";

const indexRoute: Router = Router();

indexRoute.get('/', getIndex);

export { indexRoute }