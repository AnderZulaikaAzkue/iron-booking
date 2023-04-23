const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isValidUrl } = require("../utils/validations");

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  minPeople: {
    type: Number,
    required: true,
  },
  roomNumbers: 
    [{number: Number, unavailableDates: {type: [Date]}}],
 }, { 
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      }
    }
  })

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;