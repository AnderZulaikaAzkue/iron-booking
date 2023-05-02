const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema (
{
  hotels: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }],
  },
  rooms: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
  },
  clients: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: "Client" }],
  },
  booked: {
    type: Boolean,
    default: false,      
  },
  totalPrice: {
    type: [String],
    required: true,
  },
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

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking