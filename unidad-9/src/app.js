import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";
import connectMongoDB from "./config/db.js";
import dotenv from "dotenv";
import { engine } from "express-handlebars";

//inicializamos las variables de entorno
dotenv.config();

const app = express();
app.use(express.json());

connectMongoDB();

//handlebars config
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//endpoints
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/", viewsRouter);

app.listen(8080, ()=> {
  console.log("Servidor iniciado correctamente!");
});