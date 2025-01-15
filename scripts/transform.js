const fs = require("fs");
const path = require("path");

// Use path.join to create a proper path from the script location to db.json
const dbPath = path.join(__dirname, "..", "db.json");
const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));

// Extract the items array and transform
const transformedItems = data.items.map((item) => ({
  name: item.name,
  weather: item.weather.toLowerCase(),
  imageUrl: item.imageUrl,
  owner: "6746856569f2d1a006ed001a",
  likes: [],
  createdAt: new Date(),
}));

// Write the transformed array to a new file
fs.writeFileSync("transformed.json", JSON.stringify(transformedItems, null, 2));
