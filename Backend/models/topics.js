const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  gid: {
    type: String,
  },

  area: {
    type: String,
  },

  name: {
    type: String,
  },
  description: {
    type: String,
  },

  status: {
    type: String,

    default: "Pending",
  },

  comment: {
    type: String,
  },

  sName: {
    type: String,

    default: "Pending",
  },

  csName: {
    type: String,

    default: "Not yet assigned ",
  },

  feedback: {
    type: String,

    default: "Not yet finalized ",
  },
  cId: {
    type: String,
  }
});

module.exports = mongoose.model("Topics", topicSchema);
