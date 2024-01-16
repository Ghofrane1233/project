const express = require('express')
const app = express()
const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/shop",{useNewUrlParser: true,  useUnifiedTopology: true });




// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
//check database connect or not
connect.then(()=>{
    console.log("data connected successfuly");
})
.catch(()=>{
    console.log("database cannot be connected")
})
app.use(express);

