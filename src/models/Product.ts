import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
      min: 0,
    },
    stock: {
      type: Number,
      require: true,
      min: 0,
    },
    img: {
      type: String,
      require: true,
    },
    color: {
      type: String,
    },
    size: String,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", userSchema);
