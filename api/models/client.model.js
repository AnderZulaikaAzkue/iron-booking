const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: "Client name is required",
      minlength: [3, "Client name needs at least 3 chars"],
    },
    email: {
      type: String,
      required: "Client email is required",
      match: [/^\S+@\S+\.\S+$/, "Client email must be valid"],
    },
    username: {
      type: String,
      required: "Client username is required",
      minlength: [3, "Client name needs at least 3 chars"],
      match: [/^[a-z0-9]+$/, "Name must be lowercase and without spaces"],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: "Client password is required",
      minlength: [8, "Client password needs at least 8 chars"],
    },
    location: {
      type: String,
      required: "Client location is required",
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'client'],
      default: 'client'
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        return ret;
      },
    },
  }
);

clientSchema.pre("save", function (next) {
  const client = this;

  if (client.isModified("password")) {
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(client.password, salt).then((hash) => {
          client.password = hash;
          next();
        });
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

clientSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;