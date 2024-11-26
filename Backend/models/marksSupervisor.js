const mongoose = require('mongoose');

const marksSupervisorSchema = new mongoose.Schema({
    name:{
        type: String,
      },
    description:{
        type:String,
    },
    pdf:{
        type: String,
    },
    cloudinary_id_pdf: {
        type: String,
    }
});

module.exports = mongoose.model("MarksSupervisor", marksSupervisorSchema);
