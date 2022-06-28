import { Request, Response } from "express";
import { ILogin, IUser } from "../../interfaces/interfaces";
import { User } from "../../models/user.model";
import { compareSync } from "bcrypt";

export function getUserLogin(req: Request, res: Response) {
    res.render('user/login');
}

export function postUserLogin(req: Request, res: Response) {
    const { password, email }: { password: string, email: string } = req.body;

    const user_input: ILogin = { password, email };
    
    User.loginUser(user_input)
        .then(usr => {
            if (usr) {
                const user = <IUser>usr

                if(compareSync(user_input.password, user.password)) {
                    req.session.currentUserId = user.id;
                    req.session.isLoggedIn = true;
                    return res.redirect('/');
                } else return res.redirect('/user/login');
            }

            console.log('user dont exist');
            return res.redirect('/404');
        })
        .catch(error => res.redirect('/user/login'));
}