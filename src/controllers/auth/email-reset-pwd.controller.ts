import { Request, Response } from "express";
import { User } from "../../models/user.model";
import { ILogin } from "../../interfaces/interfaces";

export function getEmailResetPwd(req: Request, res: Response) {
    res.render('user/email-reset-pwd', {'error': req.flash('error')});
}

export function postEmailResetPwd(req: Request, res: Response) {
    const { email }: { email: string } = req.body;

    const user: ILogin = {
        email: email.toLocaleLowerCase(),
        password: '',
    }

    User.findUserByEmail(user)
        .then(user => {
            if (user) return res.redirect('/'); // send email
            req.flash('error', 'Email not found');
            return res.redirect('/user/email-reset-pwd');
        })
        .catch(error => {
            res.redirect('/404');
        })
}