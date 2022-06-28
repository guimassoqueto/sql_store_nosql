import { Request, Response } from "express";
import { ILogin, IUser } from "../interfaces/interfaces";
import { User } from "../models/user.model";

export function getUserLogin(req: Request, res: Response) {
    res.render('user/login');
}

export function postUserLogin(req: Request, res: Response) {
    const { password, email } = req.body;
    
    User.loginUser(email.toLowerCase())
        .then(u => {
            const user = <IUser>u;
            if (user.password !== password) return res.redirect('/user/login');
            
            req.session.currentUserId = user.id;
            req.session.isLoggedIn = true;
            res.redirect('/');
        })
        .catch(error => {
            console.error(error);
            res.redirect('/404');
        })
}