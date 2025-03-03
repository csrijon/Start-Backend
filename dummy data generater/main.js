import express from "express";
import mongoose from "mongoose";
import employees from "./models/dummy.js";
import ejs from "ejs";
const app = express();
const port = 3000;

let name = ["srijon","gora","shreyasi","puchi"];
let ranname = name[Math.floor(Math.random()*name.length)]
let sal = Math.floor(Math.random()*10000)
let language = ["c","c++","java","python","javascript"];
let city = ["bangalore","pune","mumbai","hyderabad"]
let rancity = city[Math.floor(Math.random()*city.length)]
let ranlang = language[Math.floor(Math.random()*language.length)]
let ismanager = Math.random() > 0.5

app.use(express.static("public"))
app.set("view engine", "ejs" )
mongoose.connect("mongodb://127.0.0.1:27017/company")

app.get("/",(req,res) => {
    res.render("index")
})
app.get("/generate",(req,res) => {
    const data = new employees({
        name: ranname,
        salary: sal,
        language: ranlang,
        city: rancity,
        ismanager: ismanager
    })
    data.save()
})
app.get("/remove",(req,res) => {
    employees.deleteMany({
        ismanager: ismanager,
        city: rancity,
        language: ranlang,
        salary: sal,
        name: ranname,
    })
})
app.listen(port,() => {
console.log(`Example app listening on port ${port}`)
})