import { Request, Response, Router } from "express";
import { getUserLogin, postUserLogin } from "../controllers/user-login.controller";
import { postUserLogout } from "../controllers/user-logout.controller";
import { getUserSignUp, postUserSignUp } from "../controllers/user-signup.controller";

const userRoute: Router = Router();

userRoute.get('/login', getUserLogin);
userRoute.post('/login', postUserLogin);
userRoute.post('/logout', postUserLogout);
userRoute.get('/signup', getUserSignUp);
userRoute.post('/signup', postUserSignUp);

export { userRoute };