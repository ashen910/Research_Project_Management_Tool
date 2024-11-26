const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  l_id: {
    type: String,
  },
  g_id: {
    type: String,
  },

  member01: {
    type: String,
  },
  member02: {
    type: String,
  },
  member03: {
    type: String,
  },
  member04: {
    type: String,
  },

  panel: {
    type: String,
  },
  panelNo: {
    type: String,
  },
  pMember01: {
    type: String,
  },
  pMember02: {
    type: String,
  },
  pMember03: {
    type: String,
  },
});

module.exports = mongoose.model("Groups", groupSchema);
