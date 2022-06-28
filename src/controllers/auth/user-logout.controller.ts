import { Request, Response } from "express";

export function postUserLogout(req: Request, res: Response) {
    req.session.destroy((error) => {
        if (error) console.error(error);
    })
    res.redirect('/');
}