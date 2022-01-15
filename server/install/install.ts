import { Pool } from "pg";
import { database } from "../core/config";
import { createDbandUser } from "./create_database_and_user";
import { createSessionTable } from "./create_session_table";
import { createUsersTable } from "./create_user_table";
import { su } from "./install_conf";

(async () => {
  const pool = new Pool(su);
  await pool.query(`DROP DATABASE IF EXISTS "${database.database}"`);
  await pool.query(`DROP USER IF EXISTS "${database.user}"`);
  await createDbandUser();
  await createSessionTable();
  await createUsersTable();
})();
