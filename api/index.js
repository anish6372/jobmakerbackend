const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jobRoutes = require("../routes/Job.Routes");
const serverless = require("serverless-http"); 

const app = express();


app.use(cors());
app.use(bodyParser.json());


const mongoURI = 'mongodb://localhost:27017/cyber';

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.use('/api/jobs', jobRoutes);


module.exports.handler = serverless(app);
