
import mongoose from "mongoose"

const company = new mongoose.Schema({
   name: String,
   salary: String,
   language: String,
   city:String ,
   ismanager: Boolean
})
const employees = mongoose.model("employees",company);
export default employees