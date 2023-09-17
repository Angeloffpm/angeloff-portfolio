// server/index.js

const express = require("express");
const fs = require('fs');
const path = require("path");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }))

// Handle other routes and return the React app
app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(path.resolve(__dirname, '..', 'portfolio-website', 'build', 'index.html'));
});

/* Biography GET request */
app.get("/api/biography", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // get biography txt, send as plain text
  res.set("Content-Type", "text/plain");
  fs.readFile("./assets/biography.txt", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading file');
      return;
    }
    res.send(data);
  })
});

/* Project Data GET request */
const projectDataPath = path.join(__dirname, 'assets', 'projectdata.json');
console.log(projectDataPath);
app.get('/api/projectdata', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  fs.readFile(projectDataPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading project data file:', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error parsing JSON file:', parseError);
      res.status(500).json({ error: 'Server error' });
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});