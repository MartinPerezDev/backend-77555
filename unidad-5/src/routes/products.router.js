import express from "express";
import ProductManager from "../productManager.js";
import uploader from "../utils/uploader.js";

const productsRouter = express.Router();
const productManager = new ProductManager("./src/products.json");

productsRouter.post("/", uploader.single("file") , async(req, res)=> {
  try {
    if(!req.file) return res.status(401).json({ message: "Falta adjuntar la iamgen al formulario" });
    
    const title = req.body.title;
    const price = req.body.price;
    const thumbnail = "/img/" + req.file.filename;
    
    await productManager.addProduct({ title, price, thumbnail });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default productsRouter;