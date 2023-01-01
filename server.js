const express  = require('express');
const app = express();

app.get('/', (req,res) =>{
    // res.send("Shivam");
    console.log(__dirname + "\index.html");
    res.sendFile(__dirname + "/index.html");


    // res.sendFile("./index.html");
});

app.listen(6969, ()=>{
    console.log("Server is listening on 6969");
})

