const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  access: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
  toLearn: {
    type: String,
    required: true,
  },
  requirments: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const Course = mongoose.model("Courses", CourseSchema);

module.exports = Course;
