import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// Model
const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

const Item = mongoose.model("Item", itemSchema);

// Routes
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/api/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

app.listen(5000, () => console.log("Server running on port 5000"));