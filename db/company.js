const mongoose = require("mongoose");
const Schema = mongoose.Schema; 


let companySchema = new Schema({
    companyName: String,
    totalBudget: Number,
    department: [{type: Schema.Types.ObjectId, ref: "Department"}]
});

module.exports = mongoose.model("Company", companySchema);