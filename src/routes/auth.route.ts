import { Router } from "express";
import { getUserLogin, postUserLogin } from "../controllers/auth/user-login.controller";
import { postUserLogout } from "../controllers/auth/user-logout.controller";
import { getUserSignUp, postUserSignUp } from "../controllers/auth/user-signup.controller";

const authRoute: Router = Router();

authRoute.get('/login', getUserLogin);
authRoute.post('/login', postUserLogin);
authRoute.post('/logout', postUserLogout);
authRoute.get('/signup', getUserSignUp);
authRoute.post('/signup', postUserSignUp);

export { authRoute };