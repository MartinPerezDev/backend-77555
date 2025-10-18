import express from "express";
import ProductManager from "../productManager.js";

const viewsRouter = express.Router();
const productManager = new ProductManager("./src/products.json");


viewsRouter.get("/", async(req, res)=>{
  try {
    const user = { username: "JoaquinDev", isAdmin: false };
    const products = await productManager.getProducts();

    res.render("dashboard", { products, user });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default viewsRouter;