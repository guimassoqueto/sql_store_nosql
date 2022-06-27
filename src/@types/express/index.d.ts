import { User } from "../../models/user.model";

declare global{
    namespace Express {
        interface Request {
            currentUserId: string;
        }
    }
}

declare module 'express-session' {
    interface SessionData {
      isLoggedIn: boolean;
      currentUserId: string;
    }
  }