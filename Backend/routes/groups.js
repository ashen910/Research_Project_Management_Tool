const express = require("express");
const Groups = require("../models/groups");

const router = express.Router();

//save groups

router.post("/group/save", (req, res) => {
  let newGroup = new Groups(req.body);

  newGroup.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Groups saved successfully",
    });
  });
});

//get groups

router.get("/groups", (req, res) => {
  Groups.find().exec((err, groups) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingGroups: groups,
    });
  });
});

//get a specific group

router.get("/group/:id", (req, res) => {
  let groupId = req.params.id;

  Groups.findById(groupId, (err, group) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      group,
    });
  });
});

//update group

router.put("/group/update/:id", (req, res) => {
  Groups.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, group) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Upated Successfully",
      });
    }
  );
});

//delete group

router.delete("/group/delete/:id", (req, res) => {
  Groups.findByIdAndRemove(req.params.id).exec((err, deleteGroup) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccessful",
        err,
      });

    return res.json({
      message: "delete Successfull",
      deleteGroup,
    });
  });
});

module.exports = router;
