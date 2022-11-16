import express from "express";
import fetch from "node-fetch";
import connectDB from "./config/MongoDB.js";
import getProds from "./data/products.js";
import ImportData from "./DataImport.js";
import Product from "./Models/ProductModel.js";
import productRoute from "./Routes/ProductRoutes.js";
const app = express();
app.use(express.urlencoded());
app.use(express.json());
connectDB();
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.get("/", (req, res) => {
  res.send("api running");
});
app.listen(5000, console.log("app running...."));
