const moment = require("moment");
const transactionModel = require("../models/transactionModel");

const getAllTransactions = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactions = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),

      userId: req.body.userId,
      ...(type !== "all" && { type }),
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// delet trasnaction
const deleteTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({
      _id: req.body.transactionId,
    });
    res.status(200).send("transaction deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("error occured");
  }
};

const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction saved");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const editTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(200).send(" edited Succesfull");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};




module.exports = { getAllTransactions, addTransaction, editTransaction,deleteTransaction};
