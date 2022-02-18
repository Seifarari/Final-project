const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    price: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String },
    image: { type: String },
    Category: { type: String },
    user_id: { type: String },
    shop: { type: String },
    phone: { type: String },
    location: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product", productSchema);
