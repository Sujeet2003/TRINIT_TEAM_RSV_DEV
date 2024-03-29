import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connected to the Database...");
});

export default pool;