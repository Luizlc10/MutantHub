/*jshint esversion: 6 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// Cors Middleware
app.use(cors());

// Port number
const port = process.env.PORT || 8080;

//set static folder
app.use(express.static(path.join(__dirname, 'react-src/build')));

// Body Parser Middleware
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'react-src/build/index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`\n\nServer started on port ${port}`);
});
