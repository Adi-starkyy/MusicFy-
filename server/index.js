import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from './models/User.js'


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/musicfyUserPass");

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }
            else {
                res.json("Incorrect Password")
            }
        }
        else {
            res.json("No record found")
        }
    })
})

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})  

app.listen(3001, () => {
    console.log("Server is running ...");
})