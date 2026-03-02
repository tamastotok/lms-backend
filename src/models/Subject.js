const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tárgy neve kötelező'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    requirement: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

SubjectSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'subject',
});

module.exports = mongoose.model('Subject', SubjectSchema);
