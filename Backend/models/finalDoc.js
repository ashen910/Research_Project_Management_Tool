const mongoose = require('mongoose');

const finalDocSchema = new mongoose.Schema({
    name:{
        type: String,
      },
    pdf:{
        type: String,
    },
    cloudinary_id_pdf: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("FinalDoc", finalDocSchema);
