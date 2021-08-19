// Requiring module
const express = require('express');
 
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple <b>Hello World</b> Node App is '
        + 'running on this server')
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||5010;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));