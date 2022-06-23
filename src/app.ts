import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
// utils
import { viewsLocation } from "./utils/viewsLocation.util";
// Node modules
import { join } from "path";
// custom middlewares
import { setDefaultUser } from "./middlewares/setDefaultUser.middleware";
// routes
import { adminRoute } from "./routes/admin.route";
import { shopRoute } from "./routes/shop.route";

const PORT = 3000;
const app: Express = express();

// http://expressjs.com/en/api.html#app.set
app.set('view engine', 'pug');

// set the folder location for the views
app.set('views', viewsLocation);

// static files
app.use(express.static(join(__dirname, 'static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set default user
app.use(setDefaultUser);

// routes
app.use('/admin', adminRoute);
app.use('/shop', shopRoute);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render("index");
})

app.get('/404', (req: Request, res: Response, next: NextFunction) => {
    res.render("index");
})

app.listen(PORT, () => console.log("Server running"))