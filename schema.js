let mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  user_id: {
    type: Number,
    required: true
  },
  note: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Note", noteSchema);
