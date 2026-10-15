import Product from "../models/Product.js";

export const createProduct = async(req,res) => {
  const userReq = req.body;
  const user = await Product.create(userReq);

  res.json({
    message: "Create User Data",
    data: user,
  });
}

// getProduct
export const getProduct = async (req,res) => {
  try {
    const product = await Product.find();
    res.json({
      message: "get all product successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update Product

export const updateProduct = async (req,res) => {
  const product = await Product.findById(req.params.id);

  product.productName = req.body.productName;
  product.price = req.body.price;
  product.description = req.body.description;
  product.quantity = req.body.quantity;

  await product.save();

  res.json({
    message: "Update product successfully",
    data: product,
  });
}

// deleteProduct 
export const deleteProduct = async (req,res) => {
   await Product.findByIdAndDelete(req.params.id);
    res.json({
      message: "user Deleted",
    })
};