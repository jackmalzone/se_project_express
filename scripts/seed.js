// const fetch = require("node-fetch");
const mongoose = require("mongoose");
const User = require("../models/user.js");
const ClothingItem = require("../models/clothingItem.js");
const { NotFoundError } = require("../errors/index.js");

const items = [
  {
    name: "Boot",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Boot.png",
  },
  {
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png",
  },
  {
    name: "Coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
  {
    name: "Dress",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Dress.png?etag=1f9cd32a311ab139cab43494883720bf",
  },
  {
    name: "Hoodie",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    name: "Jeans",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jeans.png?etag=58345e8bef1ce5f95ac882e71d309e6c",
  },
  {
    name: "Sandals",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sandals.png?etag=9bea85a77c0306586d2b71a33b626d41",
  },
  {
    name: "Scarf",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Scarf.png?etag=74efbee93810c926b5507e862c6cb76c",
  },
  {
    name: "Shorts",
    weather: "Hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Shorts.png?etag=d728c496643f610de8d8fea92dd915ba",
  },
  {
    name: "Skirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Skirt.png?etag=27a6bea7e1b63218820d615876fa31d1",
  },
  {
    name: "Sneakers",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    name: "Sweatshirt",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sweatshirt.png?etag=008a9674757bea2e0bdb31242e364be0",
  },
  {
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    name: "Hat",
    weather: "hot",
    imageUrl:
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0fGVufDB8fDB8fHww",
  },
  {
    name: "Long Sleeve",
    weather: "warm",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1690034978688-dbdd03eab792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9uZyUyMHNsZWV2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Poncho",
    weather: "cold",
    imageUrl:
      "https://media.istockphoto.com/id/1433183269/photo/vibrant-mexican-ponchos-for-sale-retail-display.webp?b=1&s=612x612&w=0&k=20&c=0bu_o0mOdfPCaJGcLPeQM0phwjgRgK_0THT6ZKiNgoE=",
  },
  {
    name: "Socks",
    imageUrl:
      "https://images.freeimages.com/images/large-previews/43e/autumn-socks-1151694.jpg?fmt=webp&w=500",
    weather: "warm",
  },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");
    console.log("Connected to MongoDB");

    // First, create or find the user
    const user = await User.findOne({ email: "test@test.com" });
    if (!user) {
      throw new NotFoundError(
        "No user found - please run create-user script first"
      );
    }

    // Changed itemData to items to match the array name defined above
    const itemsWithOwner = items.map((item) => ({
      ...item,
      owner: user._id,
    }));

    // Insert the items
    await ClothingItem.insertMany(itemsWithOwner);
    console.log("Database seeded successfully");

    // Close connection when done
    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    await mongoose.connection.close();
  }
}

seedDatabase();
