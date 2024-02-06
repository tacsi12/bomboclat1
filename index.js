const express = require('express')
const app = express()
const Users = require("./models/user");
const mongoose = require("mongoose");
const databasee_uri = "mongodb+srv://tacsi:tojota12@tacscluster.mherzje.mongodb.net/"   

mongoose.set("strictQuery", false);

app.get('/', async function (req, res){
    var user = await Users.find()
    console.log(user)
    res.send(user[0])
})
app.get('/post', async function (req, res){
    await Users.insertMany([{
        name : "kakamatyi",
        id:"2",
        password: "lol"
    }])
    res.send("h")
})

mongoose.connect(databasee_uri).then(() => {
    app.listen(3000,async() => {
        console.log("server is running")
    })
})