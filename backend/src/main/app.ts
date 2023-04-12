import 'dotenv/config';
import express from 'express'
import cors from "cors";
import productRouter from "./routes/product-router"

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
  })
);

app.use('/product', productRouter)

export default app
