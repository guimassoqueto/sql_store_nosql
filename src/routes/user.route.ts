import { Request, Response, Router } from "express";
import { getUserLogin, postUserLogin } from "../controllers/user-login.controller";

const userRoute: Router = Router();

userRoute.get('/login', getUserLogin);
userRoute.post('/login', postUserLogin);
userRoute.post('/logout', (req: Request, res: Response) => {
    req.session.destroy((error) => {
        if (error) console.error(error);
    })
    res.redirect('/');
});

export { userRoute };