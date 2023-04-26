const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname))

app.get('/' , function(req , res){
    res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(3000 , ()=>{
    console.log("server started");
})

