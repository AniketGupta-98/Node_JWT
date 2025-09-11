const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema(
);

const Auth = mongoose.model("Barcode", AuthSchema);
module.exports = Auth;