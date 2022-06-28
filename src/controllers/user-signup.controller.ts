import { Request, Response } from "express";
import { IUser } from "../interfaces/interfaces";
import { User } from "../models/user.model";

export function getUserSignUp(req: Request, res: Response) {
    res.render('user/sign-up');
}

export function postUserSignUp(req: Request, res: Response) {
    const { user_name, user_email, user_pwd, user_cpwd } = req.body;

    if (user_pwd === user_cpwd) {
        const new_user: IUser = {
            name: user_name,
            email: user_email,
            password: user_pwd,
        }

        User.createUser(new_user)
            .then(new_user => {
                console.log(new_user);
                res.redirect('/');
            })
            .catch(error => {
                console.error(error);
                res.redirect('/404');
            })
    }
}