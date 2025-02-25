const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/index', (req, res) => {
  let setfile = "hey i am srijon chowdhury"
  let raj = " hry he is a boy"
  let img = "/backend image.jpeg"
  res.render("index",{setfile:setfile , img:img , raj:raj} )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/chut", (req,res) => {
  res.send("hello")
}
)