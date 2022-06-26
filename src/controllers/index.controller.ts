import { Request, Response } from "express";

export function getIndex(req: Request, res: Response) {
    const { isLoggedIn } = req.cookies;
    if (isLoggedIn) console.log(isLoggedIn);
    else console.log('no isLoggedIn');
    
    res.render("index", { isLoggedIn: isLoggedIn === 'true' });
}