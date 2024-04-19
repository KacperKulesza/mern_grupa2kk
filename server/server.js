const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = require("./app");
const PORT = 8080;

app.use(express.json());
app.use(cors());


app.listen(PORT, () => 
{
    console.log(`Serwer nasłuchuje na porcie: ${PORT}`);
})

process.on('SIGINT', async () => {
    console.log("Closing connection")
    try{
        await mongoose.disconnect();
        console.log("Connection closed")
    }
    catch(err){
        console.log(`Closing connection error: ${err.message}`);
    }
    finally{
        process.exit();
    }
})
