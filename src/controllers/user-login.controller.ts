import { Request, Response } from "express";


export function getUserLogin(req: Request, res: Response) {
    res.render('user/login');
}

export function postUserLogin(req: Request, res: Response) {
    const { password, email } = req.body;
    //res.cookie('isLoggedIn', 'true', { maxAge: 1000 * 1000, httpOnly: true });
    req.session.isLoggedIn = true;
    res.redirect('/');
}