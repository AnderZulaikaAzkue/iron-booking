const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    rooms: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  }, 
  { timestamps: true }
);


const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;