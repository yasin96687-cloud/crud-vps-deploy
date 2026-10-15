import mongoose from "mongoose";

const connectedDB = () => {
  mongoose.connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("mongoDB Connected Error", error.message));
};

export default connectedDB;