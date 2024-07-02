const express = require("express");
const {
  addTransaction,
  getAllTransactions,
  editTransaction,
  deleteTransaction
 
} = require("../controllers/transactioController");

const router = express.Router();

// routes for trasn

router.post("/add-transaction", addTransaction);

router.post("/edit-transaction", editTransaction);

// delet route
router.post("/delete-transaction",deleteTransaction)
// get transation
router.post("/get-transaction", getAllTransactions);

module.exports = router;
