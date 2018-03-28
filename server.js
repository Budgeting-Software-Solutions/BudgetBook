const express = require("express");
const port = 3000; 
const path = require("path");
const app = express();

const dbController = require('./db/dbController');

const mongoose = require('mongoose');
const mongoURI = 'mongodb://budgetbook:budgetbook@ds125469.mlab.com:25469/budgetbook'; 
const URI = process.env.MONGO_URI || mongoURI;

mongoose.connect(mongoURI);

mongoose.connection.once('open', () => {
    console.log('connected to mongoDB for BudgetBook')
})

app.use(express.static('public')); 

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./index.html"));
});

// controllers...

app.listen(port, ()=> console.log(`Server is listening on port ${port}`));




