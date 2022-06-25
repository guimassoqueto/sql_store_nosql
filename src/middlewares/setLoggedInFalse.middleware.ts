import { Request, Response, NextFunction } from "express";

export function setLoggedInFalse(req: Request, res: Response, next: NextFunction) {
    req.isLoggedIn = false;
    next();
}