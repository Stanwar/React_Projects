var express = require('express');

// Creating new app 
var app = express();

// Exposing a folder 
app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Express app is up and running on port 3000');
})