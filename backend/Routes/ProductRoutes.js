import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";
const productRoute = express.Router();
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
productRoute.get(
  "/id=:id",
  asyncHandler(async (req, res) => {
    const product = await Product.find({ id: req.params.id });
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found !");
    }
  })
);
productRoute.get(
  "/name=:name",
  asyncHandler(async (req, res) => {
    const products = await Product.find({
      $text: { $search: req.params.name },
    });
    if (products) {
      res.json(products);
    } else {
      res.status(404);
      throw new Error("No Products Found !");
    }
  })
);
productRoute.get(
  "/brand=:brand",
  asyncHandler(async (req, res) => {
    const products = await Product.find({ brandName: req.params.brand });
    if (products) {
      res.json(products);
    } else {
      res.status(404);
      throw new Error("No Products Found !");
    }
  })
);
productRoute.get(
  "/categId=:categId",
  asyncHandler(async (req, res) => {
    const products = await Product.find({ categId: req.params.categId });
    if (products) {
      res.json(products);
    } else {
      res.status(404);
      throw new Error("No Products Found !");
    }
  })
);
productRoute.delete("/delete/id=:id", function (req, res) {
  Product.findOneAndDelete({ id: req.params.id }, function (err, docs) {
    if (docs == null) {
      res.send("Product doesnt exist !");
    } else {
      res.send(docs);
    }
  });
});
productRoute.post("/add", async (req, res) => {
  const prod = new Product({
    name: req.body.name,
    id: req.body.id,
    categId: req.body.categId,
    categorie: req.body.categoryName,
    price: {
      current: {
        value: req.body.price.current.value,
        text: req.body.price.current.text,
      },
      prev: {
        value: req.body.price.prev.value,
        text: req.body.price.prev.text,
      },
    },
    isInStock: req.body.isInStock,
    isSellingFast: req.body.isSellingFast,
    dateCreation: req.body.dateCreation,
    media: req.body.media,
    brandName: req.body.brandName,
    comments: req.body.comments,
  });
  const val = await prod.save();
  res.json(val);
});
productRoute.put(
  "/update/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body
    );
    if (product) {
      res.json(product);
    } else {
      res.send("Prouct not found");
    }
  })
);
export default productRoute;
