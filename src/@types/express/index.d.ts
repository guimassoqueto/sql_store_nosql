import { User } from "../../models/user.model";

declare global{
    namespace Express {
        interface Request {
            currentUserId: string;
            isLoggedIn: boolean;
        }
    }
}