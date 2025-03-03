import mongoose from "mongoose";
import express from "express";
import animals from "./models/animal.js"; // Correct import

const port = 3000;
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/animal");

app.get("/", (req, res) => {
    const newAnimal = new animals({  // Corrected variable name
        name: "cat",
        desc: "I am a cat",
        ishidden: false,
        days: "1"
    });

    newAnimal.save();
    newAnimal.
    res.send("Hello World!");
});

app.get("/todo",async(req,res) => {
  let ani=  await animals.findOne();
//   console.log(ani)
  res.send({desc: ani.desc,name:ani.name});
}
)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
