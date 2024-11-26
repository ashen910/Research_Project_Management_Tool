const express = require("express");
const Topics = require("../models/topics");

const router = express.Router();

//save topics

router.post("/topic/save", (req, res) => {
  let newTopic = new Topics(req.body);

  newTopic.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Topics saved successfully",
    });
  });
});

//get topics

router.get("/topics", (req, res) => {
  Topics.find().exec((err, topics) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingTopics: topics,
    });
  });
});

//get a specific topic

router.get("/topic/:id", (req, res) => {
  let topicId = req.params.id;

  Topics.findById(topicId, (err, topic) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      topic,
    });
  });
});

//update topics

router.put("/topic/update/:id", (req, res) => {
  Topics.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, topic) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      return res.status(200).json({
        success: "Upated Successfully",
      });
    }
  );
});

//delete topic

router.delete("/topic/delete/:id", (req, res) => {
  Topics.findByIdAndRemove(req.params.id).exec((err, deleteTopic) => {
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
