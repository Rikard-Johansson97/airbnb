const mongoose = require("mongoose");
const { Apartment } = require("./models/Apartment");

const url =
  "mongodb+srv://airbnb:airbnb@cluster0.ihesg3d.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(url);

  const apartment = await Apartment.find({})
    .select({ name: 1, price: 1, summary: 1 })
    .limit(2);
  console.log(apartment);
}
main();
