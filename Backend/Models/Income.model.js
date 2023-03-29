const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema({
    title:{type:String,required:true},
    type:{type:String,required:true},
    amount:{type:Number,require:true},
    user:{type:String,required:true},
    createdAt:{type: Date,default: Date.now}
});

const incomemodel = mongoose.model("income",incomeSchema);

module.exports = {incomemodel}