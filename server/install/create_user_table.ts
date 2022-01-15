import { database } from "../core/config";
import pg from "pg";

export const createUsersTable: () => Promise<void> = async () => {
  try {
    const pool = new pg.Pool(database);
    console.log("Creating user table");
    await pool.query(`
    CREATE TABLE public.users
    (   
        "id" uuid NOT NULL,
        "email" character varying (60) NOT NULL,
        "name" character varying(50) NOT NULL,
        "lastname" character varying(50) NOT NULL,
        "password" text NOT NULL,
        "role" integer NOT NULL,
        PRIMARY KEY (id)
    )`);
    pool.end();
    console.log("DONE!");
  } catch (e) {
    console.error("ERROR WHILE CREATING THE USERS TABLE");
    throw e;
  }
  return;
};
