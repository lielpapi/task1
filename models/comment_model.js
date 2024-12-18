const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId, // קשר לפוסט עם ObjectId
    required: true,
    ref: "Post", // יצירת קשר למודל "Post"
  },
});

const CommentsModel = mongoose.model("Comments", commentsSchema);

module.exports = CommentsModel;
