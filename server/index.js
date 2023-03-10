const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { Listing } = require("./models/Listing");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

const url = process.env.DB_URI;
mongoose.connect(url, () => {
  console.log("connected");
});

app.get("/listings", async (req, res) => {
  const city = req.query.city;
  let listings;
  if (city) {
    // Find all listings in the database that contain the keyword in the city field, ignoring case
    listings = await Listing.find({
      "address.street": { $regex: new RegExp(city, "i") },
    }).limit(20);
  } else {
    // If no city is specified, return all listings
    listings = await Listing.find({}).limit(20);
  }
  res.json(listings);
});

app.get("/listings/categories/:category", async (req, res) => {
  const category = req.params.category;
  if (!category) return;
  console.log(category);
  const listings = await Listing.find({ property_type: category }).limit(20);
  console.log(listings[0].property_type);
  res.json(listings);
});

app.get("/listings/:id", async (req, res) => {
  const id = req.params.id;
  const listing = await Listing.findOne({ _id: id });
  res.json(listing);
});

app.listen(process.env.PORT);
