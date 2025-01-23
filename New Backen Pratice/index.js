const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get( "/", (req,res) => {
  res.send(" i am a backend developer")
})

app.post("/",(req,res) => {
  res.send("i am a post request")
});

app.get("/index",(req,res) => {
  res.sendFile("templates/index.html",{root: __dirname})
})

app.listen(port,() => {
  console.log(`app listen on port ${port}`)
})