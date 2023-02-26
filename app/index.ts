import dotenv from "dotenv";
import { env } from "process";
import express from "express";
import pkg from "body-parser";
import cors from "cors";
import { indexRouter } from "./routes";

dotenv.config();

const { json, urlencoded } = pkg;
const app = express();
const { PORT } = env;

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);
// app.use(cors("https://localhost:3000"));

//invocar las distintas rutas

// app.use("/auth", authRouter);
// app.use("/user", userRouter);
app.use("/", indexRouter);
// app.use("/create", createRouter);
// app.use("/moves", movesRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
