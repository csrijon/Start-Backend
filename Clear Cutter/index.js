import express from 'express';
import fs from 'fs';
import path from 'path';
const app = express()
const port = 3000;

app.get('/',(req,res) => {
  res.send('hello world')
})
app.listen(port, () => {
  console.log(`Hello your express app is running${port}`)
})


fs.writeFile('srijon.pdf','hey i am cr by srijon', (e,d) => {
  console.log(e,d)
})

const folderpath = './pdf';
const filename = path.join(folderpath,'srijon.pdf');

fs.appendFile(filename,'hey i am a guy',(e,d) => {
  console.log(e,d)
})

const secondfolder = './jpg';

if (!fs.existsSync(secondfolder)) {
  fs.mkdirSync(secondfolder)
}
const secfilename = path.join(secondfolder, 'srijon.jpg');

fs.appendFile(secfilename,'hey i am a guy', () => {
  console.log("done")
});

