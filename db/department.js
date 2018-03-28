let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let departmentSchema = new Schema({
    departmentName: String,
    departmentPercentAllocation: Number,
    transactionHistory: [{type: mongoose.Schema.Types.ObjectId, ref: "Transaction"}]
});

module.exports = mongoose.model("Department", departmentSchema); 