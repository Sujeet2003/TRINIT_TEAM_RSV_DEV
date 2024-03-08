import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.get("/", async (req, res) => {
  const booksInfo = await pool.query("SELECT * FROM books WHERE id=$1", [1]);
  res.json(booksInfo.rows);
  res.send("Hello World this is Server");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
