const Product = require("../model/product");
const Order = require("../model/order");
const User = require("../model/user");
const ObjectId = require("mongodb").ObjectId;
const config = require("config");
const jwt = require("jsonwebtoken");

exports.getUser = (req, res, next) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
};
