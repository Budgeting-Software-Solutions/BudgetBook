let mongoose = require("mongoose");
let Schema = mongoose.Schmea;

let departmentSchema = new Schema({
    departmentName: String,
    departmentPercentAllocation: Number,
    transactionHistory: [{type: Schema.Types.ObjectId, ref: "Transaction"}]
});

module.exports = mongoose.model("Department", departmentSchema); 