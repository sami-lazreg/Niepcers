const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  Url: {
    type: String,
    required: true,
  },

  Category: {
    type: String,
    required: true,
  },
  Niepcer: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },

  Published_at: {
    type: Date,
    default: Date.now,
  },
});

const Photos = mongoose.model("Photos", PhotoSchema);
module.exports = Photos;
