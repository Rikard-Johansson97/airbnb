const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    address: {
      street: String,
    },
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("listingsandreviews", listingSchema);

module.exports = { Listing };
