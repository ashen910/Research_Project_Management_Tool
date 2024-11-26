const mongoose = require('mongoose');

const topicRegDocSchema = new mongoose.Schema({
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

module.exports = mongoose.model("TopicRegDoc", topicRegDocSchema);
