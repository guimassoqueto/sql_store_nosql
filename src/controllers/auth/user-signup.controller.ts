import { Request, Response } from "express";
import { IUser } from "../../interfaces/interfaces";
import { User } from "../../models/user.model";
import { hash } from "bcrypt";

interface IUserSignUp {
    user_name: string
    user_email: string
    user_pwd: string
    user_cpwd: string
}

export function getUserSignUp(req: Request, res: Response) {
    res.render('user/sign-up');
}

export function postUserSignUp(req: Request, res: Response) {
    const { user_name, user_email, user_pwd, user_cpwd }: IUserSignUp = req.body;

    if (user_pwd === user_cpwd) {
        hash(user_pwd, 10)
            .then(hashed_pwd => {
                const new_user: IUser = {
                    name: user_name,
                    email: user_email.toLowerCase(),
                    password: hashed_pwd
                }
                return User.createUser(new_user);
            })
            .then(u => {
                const user = <IUser>u;
                req.session.currentUserId = user.id
                req.session.isLoggedIn = true;
                res.redirect('/');
            })
            .catch(error => {
                console.error(error);
                res.redirect('/404');
            })
    }
    else res.redirect('/user/signup');
}