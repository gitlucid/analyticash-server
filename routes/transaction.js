import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
    try {
      // Query the database to retrieve transactions
      const transactions = await Transaction.find()
        .limit(50)
        .sort({ createdOn: -1 });
  
      // Send the transactions as the API response
      res.status(200).json(transactions);
    } catch (error) {
      // Handle any errors that occur during the retrieval
      res.status(404).json({ message: error.message });
    }
  });

export default router;