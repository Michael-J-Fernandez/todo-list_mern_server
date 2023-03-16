const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
        type: String,
        default: "low",
        enum: ["high", "medium", "low"]
    },
    isComplete: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = ToDo = mongoose.model('ToDo', todoSchema);