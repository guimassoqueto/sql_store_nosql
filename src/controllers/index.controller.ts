import { Request, Response } from "express";

export function getIndex(req: Request, res: Response) {
    const { isLoggedIn } = req.session;
    console.log(req.session.currentUserId);
    res.render("index", { isLoggedIn: isLoggedIn });
}