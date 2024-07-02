const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId:{
        type:String,
        required:true,
    },
    amount: {
      type: Number,
      requred: [true, "Amount is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    type: {
      type: String,
      required: [true, "Description is required"],
    },
    reference:{
        type:String
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transaction", transactionSchema);
module.exports=transactionModel