const express = require("express");

// Create express instnace
const app = express();

// Require API routes
const tests = require("./routes/tests");

// Import API Routes
app.use(tests);

// Export the server middleware
module.exports = {
  path: "/api",
  handler: app
};
