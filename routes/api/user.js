const express = require("express");
const userController = require("../../controller/user");
import auth from "../../middleware/auth";

const router = express.Router();

router.get("/user", auth, userController.getUser);
// router.get('/payment-page', userController.getPayment);
// router.get('/order-history', userController.getOrders);
// router.post('/delete-history', userController.deleteHistory)

module.exports = router;
