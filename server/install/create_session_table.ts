import { Pool } from "pg";
import { database, sessionTable } from "../core/config";

export const createSessionTable: () => Promise<void> = async () => {
  const pool: Pool = new Pool(database);
  const client = await pool.connect();
  try {
    console.log("CREATING THE SESSION TABLE");

    await client.query(`
    CREATE TABLE "${sessionTable}" (
      "sid" varchar NOT NULL COLLATE "default",
      "sess" json NOT NULL,
      "expire" timestamp(6) NOT NULL
    )
    WITH (OIDS=FALSE);`);
    await client.query(`
      ALTER TABLE "${sessionTable}" ADD CONSTRAINT "session_key" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
    `);
    await client.query(
      `CREATE INDEX "idx_session_expire" ON "${sessionTable}" ("expire");`
    );
    console.log("DONE!!");
  } catch (e) {
    console.error("ERROR WHILE CREATING DATABASE AND DB USER");
    throw e;
  } finally {
    client.release();
    pool.end();
  }
};
