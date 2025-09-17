const mongoose = require('mongoose');

const UserCreateSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      require: true,
    },
    LastName: {
      type: String,
      require: true,
    },
    UserId: {
      type: String,
      require: true,
    },
    Token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("customer_auths", UserCreateSchema);
module.exports = User;