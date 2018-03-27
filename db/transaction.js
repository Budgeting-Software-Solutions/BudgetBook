let mongoose = require("mongoose");
let Schema = mongoose.Schmea;

let transactionSchema = new Schema({
    itemName: String,
    moneySpent: Number,
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Transaction", transactionSchema);  