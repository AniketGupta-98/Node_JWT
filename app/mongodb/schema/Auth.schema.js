const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema(
    {
    Auth: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Auth = mongoose.model("customer_auths", AuthSchema);
module.exports = Auth;