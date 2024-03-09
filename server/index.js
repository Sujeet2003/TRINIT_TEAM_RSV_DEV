import express from "express";
import cors from "cors";
import pool from "./db.js";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const booksInfo = await pool.query("SELECT * FROM books WHERE id=$1", [1]);
    res.status(200).json({ data: booksInfo });
  } catch (error) {
    console.error(error.message);
  }
});

// app.post("/upload", upload.single("pdfFile"), (req, res) => {
//   try {
//     const fileBuffer = req.file.buffer;
//     console.log("File received:");
//     // Here, you can process the fileBuffer (which contains the uploaded PDF file)

//     // For demonstration purposes, we'll send back a simple response with the file name
//     const fileName = req.file.originalname;
//     res.json({ fileName });
//   } catch (error) {
//     console.error("Error handling file upload:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.post('/upload', async (req, res) => {
  console.log("Hello");
  res.status(200).json({data : "success"})
})

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});
