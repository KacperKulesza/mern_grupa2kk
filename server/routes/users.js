const express = require("express");
const router = express.Router();
const User = require("../models/User");



router.get("/", async(req, res) => {
    try{
        const users = await User.find({});
        res.json(users);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;

    try{
        const users = await User.findById(id);
        res.json(users);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    
    try{
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser){
            res.status(404).json({message: "Error user delete"});
        }
        res.json({message: "User deleted"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

router.post("/", async(req, res) => {
    const body = req.body;
    console.log(body);

    try{
        const newUser = await new User(body);
        newUser.save();
        if(!newUser){
            res.status(404).json({message: "Error user post"});
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

module.exports = router;