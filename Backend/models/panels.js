const mongoose = require("mongoose");

const panelSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Panels", panelSchema);
