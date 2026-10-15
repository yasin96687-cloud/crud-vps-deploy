// import
import express from "express";
import dotenv from "dotenv";
import connectedDB from "./config/db.js";
dotenv.config();
import productRoutes from "./routes/productRoutes.js";

connectedDB();

//  server create
const app = express();
app.use(express.json());
app.use("/api/user/url",productRoutes);
const PORT = process.env.PORT || 5000;


// server on
app.listen(PORT, () => {
  console.log(`server running on port number ${PORT}`);
});