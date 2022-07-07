import { Router } from "express";
import { getUserLogin, postUserLogin } from "../controllers/auth/user-login.controller";
import { postUserLogout } from "../controllers/auth/user-logout.controller";
import { getUserSignUp, postUserSignUp } from "../controllers/auth/user-signup.controller";
import { getEmailResetPwd, postEmailResetPwd } from "../controllers/auth/email-reset-pwd.controller"; 
import { onlyAuthAccess } from "../middlewares/onlyAuthAccess.middleware";

const authRoute: Router = Router();

authRoute.get('/login', getUserLogin);
authRoute.post('/login', postUserLogin);
authRoute.post('/logout', onlyAuthAccess, postUserLogout);
authRoute.get('/signup', getUserSignUp);
authRoute.post('/signup', postUserSignUp);
authRoute.get('/email-reset-pwd', getEmailResetPwd);
authRoute.post('/email-reset-pwd', postEmailResetPwd);

export { authRoute };