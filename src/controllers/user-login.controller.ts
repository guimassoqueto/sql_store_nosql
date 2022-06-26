import { Request, Response } from "express";
import moment from "moment";

export function getUserLogin(req: Request, res: Response) {
    res.render('user/login');
}

export function postUserLogin(req: Request, res: Response) {
    const { password, email } = req.body;
    res.cookie('isLoggedIn', 'true', { maxAge: 10 * 1000, httpOnly: true });
    res.redirect('/');
}