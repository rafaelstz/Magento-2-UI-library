const express = require('express');
const app = express();
const path = require('path');
const port = 8081;

// This serves static files from the specified directory
app.use(express.static(path.join(__dirname, 'docs')));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});