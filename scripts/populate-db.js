const mongoose = require("mongoose");
const ClothingItem = require("../models/clothingItem");
const items = require("../transformed.json");

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    return ClothingItem.insertMany(items);
  })
  .then((result) => {
    console.log(`Successfully added ${result.length} items`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error:", err);
    mongoose.connection.close();
  });
