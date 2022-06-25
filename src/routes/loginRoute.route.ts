import { Router } from "express";
import { getUserLogin, postUserLogin } from "../controllers/user-login.controller";

const userRoute: Router = Router();

userRoute.get('/login', getUserLogin);
userRoute.post('/login', postUserLogin);

export { userRoute };