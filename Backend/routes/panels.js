const express = require("express");
const Panels = require("../models/panels");

const router = express.Router();

router.post("/panel/save", (req, res) => {
  let newPanel = new Panels(req.body);

  newPanel.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Panel Created successfully",
    });
  });
});

router.get("/panels", (req, res) => {
  Panels.find().exec((err, panels) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPanels: panels,
    });
  });
});

router.get("/panel/:id", (req, res) => {
  let panelId = req.params.id;

  Panels.findById(panelId, (err, panel) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      panel,
    });
  });
});

router.put("/panel/update/:id", (req, res) => {
  Panels.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, panel) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Upated Successfully",
      });
    }
  );
});

router.delete("/panel/delete/:id", (req, res) => {
  Panels.findByIdAndRemove(req.params.id).exec((err, deleteTopic) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccessful",
        err,
      });

    return res.json({
      message: "delete Successfull",
      deleteTopic,
    });
  });
});

module.exports = router;
