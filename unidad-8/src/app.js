import express from "express";
import productsRouter from "./routes/products.router.js";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv";

//inicializamos las variables de entorno
dotenv.config();

const app = express();
app.use(express.json());

connectMongoDB();

//endpoints
app.use("/api/products", productsRouter);

app.listen(8080, ()=> {
  console.log("Servidor iniciado correctamente!");
});