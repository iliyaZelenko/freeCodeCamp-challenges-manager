const express = require('express')
const nocache = require('nocache')

// Create express instnace
const app = express()
// Require API routes
const tests = require('./routes/tests')

app.use(nocache())
// Import API Routes
app.use(tests)

// app.get('/', (req, res) => {
//   res.json({ it: 'works!12334' })
// })

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
