import { Request, Response } from "express";

export function getIndex(req: Request, res: Response) {
    const { isLoggedIn } = req.session;

    res.render("index", { isLoggedIn: isLoggedIn });
}