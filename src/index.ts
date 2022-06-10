import { config } from "dotenv";
config();
import "./lib/db";
import express from "express";
import cors from "cors";
import route from "./routes";
const app = express();
const port = process.env.PORT || 3333;
//cors
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});

app.use("/api", route);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
