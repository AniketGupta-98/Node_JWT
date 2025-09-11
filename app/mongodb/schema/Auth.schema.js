const mongoose = require('mongoose');



const Auth = mongoose.model("Barcode", AuthSchema);
module.exports = Auth;