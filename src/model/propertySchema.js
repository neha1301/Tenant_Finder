const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema(
  {
    propertyName: { type: String, required: true, unique: true },
    propertyType: { type: String, enum: ["PG", "FLAT", "HOSTEL", "APARTMENT"] },
    rent: Number,
    securityDeposit: Number,
    description: String,
    imageList: String,
    locationName: String,
    googleMapLocation: String,
  },
  {
    collection: "properties",
  }
);

const Property = mongoose.model("properties", propertySchema);

module.exports = Property;
