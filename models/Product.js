import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  myName: String,
  department: String,
  description: String,
  roll: Number,
});

const Product = mongoose.model("Product", userSchema);

export default Product;