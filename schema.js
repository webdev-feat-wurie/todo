let mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  userID: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  reminderDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Todo", todoSchema);
