const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema(
  {
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'A feladat címe kötelező'],
      trim: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['hátralévő', 'folyamatban', 'befejezett'],
      default: 'hátralévő',
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Assignment', AssignmentSchema);
