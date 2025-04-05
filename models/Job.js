const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  company: { type: String, required: true }, 
  location: { type: String, required: true }, 
  jobType: { 
    type: String, 
    enum: ['Full Time', 'Contract', 'Internship', 'Part Time'], 
    required: true 
  }, 
  salaryRange: { type: String, required: true }, 
  applicationDeadline: { type: Date, required: true }, 
  description: { type: String, required: true }, 
});

module.exports = mongoose.model('Job', jobSchema);