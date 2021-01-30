const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const PORT = process.env.PORT || 5000;

// Serve up static assets (usually on heroku)
app.use(express.static(publicPath));

// Start the API server
app.listen(PORT, function (err) {
  if (err) throw err;
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
