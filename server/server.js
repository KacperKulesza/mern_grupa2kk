const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = 8080

app.use(express.json())

const myDataBase = "myDB"
const url = `mongodb://localhost:27017/${myDataBase}`
mongoose.connect(url)
    .then(console.log("Połączono z MongoDB"))
    .catch((err) => console.log(err.message))

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema)

app.get("/api/users", async(req, res) => {
    try{
        const users = User.find({})
        res.json(users) 
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

app.listen(PORT, () => 
{
    console.log(`Serwer nasłuchuje na porcie: ${PORT}`)
})

process.on('SIGINT', () => {
    console.log("Zamykanie połączenia")
    mongoose.disconnect()
        .then(() => console.log("Połączenie zamknięte"))
        .finally(() => process.exit())
})
