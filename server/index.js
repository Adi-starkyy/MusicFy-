import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from './models/User.js'

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/musicfyUserPass");

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})  

app.listen(3001, () => {
    console.log("Server is running ...");
})