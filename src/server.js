//create a server
const express = require('express');

const app = express();

app.get('/', (req, res) => {    
    res.send("<h1>Hello World INSPIREDENIGMA this side!</h1>");
}); 

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}) 

