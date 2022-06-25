import { Request, Response } from "express";

export function getUserLogin(req: Request, res: Response) {
    res.render('user/login');
}

export function postUserLogin(req: Request, res: Response) {
    const { password, email } = req.body;
    res.cookie('isLoggedIn', true)
    req.isLoggedIn ? res.redirect('/') : res.redirect('/')
}