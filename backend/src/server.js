
// Instanciate express server and server setup
require('dotenv').config
const port = process.env.PORT;
const express = require('express');
const app = express();

// Require custom routes handlers and modules



// Cors for middleware
const cors = require('cors');

// Use the things.
app.use(cors());
app.use(express.json);

// Error stuff 


// Export the stuff 
module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, console.log(`--Server Running-- Port:${port}`))
    }
}