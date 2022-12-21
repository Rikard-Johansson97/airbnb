const express = require("express");
const bodyParser = require("body-parser");
const cors = require("Cors");
const app = express();
const { Listing } = require("./models/Listing");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

const url =
  "mongodb+srv://airbnb:airbnb@cluster0.ihesg3d.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
mongoose.connect(url, () => {
  console.log("connected");
});

app.get("/listings", async (req, res) => {
  const listings = await Listing.find({}).limit(20);
  res.json(listings);
});

app.get("/listings/:id", async (req, res) => {
  id = req.params.id;
  const listing = await Listing.findOne({ _id: id });
  res.json(listing);
});

app.listen(3000);
