import { Request, Response, NextFunction } from "express";

export async function onlyAuthAccess(req: Request, res: Response, next: NextFunction) {
    if (!req.session.isLoggedIn) return res.redirect('/user/login');
    next();
}