import express from "express";
import session from "express-session";
import connect from "connect-pg-simple";
import { pool, secret, sessionTable } from "./core/config";
import authRouter from "./modules/auth/routes/auth_router";
import cors from "cors";
import User from "./modules/auth/entities/user";
const pgSession = connect(session);
const app = express();

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) =>
      origin ? callback(null, true) : callback(null, true),
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(
  session({
    name: "SESS_NAME",
    saveUninitialized: false,
    secret: secret,
    store: new pgSession({
      pool: pool,
      tableName: sessionTable,
    }),
    resave: false,
    
    cookie: {
      
      sameSite: false,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: false,
    },
  })
);

app.use("/auth", authRouter);

app.listen(3000, () => console.log("Listening on port 3000!"));
