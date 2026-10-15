import express from "express";

import {
   createProduct,
   getProduct,
   updateProduct,
   deleteProduct
  } from "../Controllers/productController.js"

  const router = express.Router();


 router.post ("/create", createProduct);
 router.get ("/", getProduct);
 router.put ("/:id", updateProduct);
 router.delete ("/:id", deleteProduct);

 export default router;