import { Request, Response } from "express";

export function getIndex(req: Request, res: Response) {
    console.log(req.get('Cookie'))
    res.render("index", { isLoggedIn: req.isLoggedIn });
}