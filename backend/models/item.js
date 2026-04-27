const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  serialNumber: String   // ✅ NEW FIELD
});

module.exports = mongoose.model("Item", itemSchema);